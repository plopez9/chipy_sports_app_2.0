# -*- coding: utf-8 -*-
"""
Created on Wed Jul 24 09:21:56 2019

@author: LOPEZPED
"""

import pandas as pd
import requests
import io

from bs4 import BeautifulSoup as bs
from sqlalchemy import create_engine, select, Table, MetaData
#Following functions work for year 2016 or greater


class FootballData:
    def __init__(self, year):
        self.year=year
        self.url="http://rotoguru1.com/cgi-bin/fyday.pl?week=WK&year=YR&game=yh&scsv=1".replace("YR", str(year))

        if year<=2015:
            raise ValueError("No data recorded before 2016")

    def YearData (self, start, end):

        def rename(name):
            new = name.split()
            new = str(new[-1]) + " " + str(new[0]).replace(",", "")

            return new

        weeks = list(range(start, end, 1))
        df = pd.DataFrame()

        if start < 1 or start > 18:
            raise ValueError("Value must be between 1 and 18")

        if end < 1 or end >18:
            raise ValueError("Value must be between 1 and 18")


        if start == end:
            URL = self.url.replace("WK", str(start))
            request = requests.get(URL)
            data = request.text
            df = pd.read_csv(io.StringIO(bs(data, "html.parser").find("pre").text), sep=";")
            del df["GID"], df["YH salary"]
            df.set_index(["Pos", "Name", "Year", "Week", "Oppt"], inplace=True)

            return df

        for w in weeks:
            URL = self.url.replace ("WK", str(w))
            request = requests.get(URL)
            data = request.text
            temp_df = pd.read_csv(io.StringIO(bs(data, "html.parser").find("pre").text), sep=";")
            df = pd.concat([df, temp_df])
            URL = self.url

        del df["GID"], df["YH salary"]

        df = df.loc[df["Pos"]!="Def"]
        df["Name"] = df["Name"].apply(rename)

        df.set_index(["Pos", "Name", "Year", "Week", "Oppt"], inplace=True)

        return df

    def DefenseData(self, start, end):
        defense = pd.DataFrame()
        position = ["QB", "RB", "WR", "TE"]

        for p in position:
            opt_rb = FootballData(self.year).YearData(start, end).xs(p, level="Pos")
            opt_rb = opt_rb.groupby(["Week", "Oppt"]).sum()
            opt_rb ["Pos"] = p
            defense = pd.concat([defense, opt_rb])

        defense.reset_index(inplace=True)
        defense.set_index(["Pos", "Oppt", "Week"], inplace=True)

        idx = pd.IndexSlice
        temp = defense.loc[idx["WR",:], idx["YH points"]].transform(lambda x: x/2)
        defense.update(temp, join="left", overwrite=True, filter_func=None, errors='ignore')

        return defense

    def DefenseSummary(self, start, end):
        defense = FootballData(self.year).DefenseData(start, end)
        d_summary = round(defense.groupby(["Oppt","Pos"]).mean(),2)
        d_summary["GP"] = defense.groupby(["Oppt", "Pos"]).count()
        d_summary["STD"] = round(defense.groupby(["Oppt", "Pos"]).std(), 2)

        return d_summary


    def PlayerSummary(self, start, end):
        players = FootballData(self.year).YearData(start, end)
        dfense = FootballData(self.year).DefenseData(start, end)

        opt_mean = round(dfense.groupby(["Oppt", "Pos"]).mean(), 2)
        opt_mean = opt_mean.rename(columns={"YH points": "Average Points Allowed"})
        players.reset_index(inplace=True)
        opt_mean.reset_index(inplace=True)
        players = pd.merge(players, opt_mean, on=["Pos", "Oppt"])
        players.set_index(["Pos", "Name", "Year", "Week", "Oppt"], inplace=True)

        player_mean = round(players.groupby(["Name", "Pos", "Year"]).mean(), 2)
        player_mean = player_mean.rename(columns={"YH points": "Average Points Scored"})

        player_std = round(players.groupby(["Name", "Pos", "Year"]).std(), 2)
        player_std = player_std.rename(columns={"YH points": "STD", "Average Points Allowed": "Defense's STD"})

        gp = players.groupby(["Name", "Pos", "Year"]).count()
        gp.rename(columns={"Team": "GP"}, inplace=True)
        del gp["YH points"], gp["h/a"], gp["Average Points Allowed"]

        summary = pd.concat([gp, player_mean, player_std], axis=1)
        summary = summary[["GP", "Average Points Scored", "STD", "Average Points Allowed", "Defense's STD"]]

        return summary

# Database Creation
#print(FootballData(2018).YearData(1,18))

Defense = FootballData(2019).DefenseData(1,5)
DefenseSummary = FootballData(2019).DefenseSummary(1,5)
NFLStats = FootballData(2019).YearData(1,5)
NFLSummary = FootballData(2019).PlayerSummary(1,5)

engine = create_engine(r"sqlite:///C:\Users\Pedro\Desktop\Programs\chipy_sports_app\sporting_webapp\nba.db")

Defense.to_sql("Defensive Stats", con = engine, if_exists= "replace", chunksize = 10)
DefenseSummary.to_sql("Defensive Summary", con = engine, if_exists="replace", chunksize = 10)
NFLStats.to_sql("NFL Stats", con= engine, if_exists="replace", chunksize=10)
NFLSummary.to_sql("NFL Summary", con= engine, if_exists="replace", chunksize=10)
