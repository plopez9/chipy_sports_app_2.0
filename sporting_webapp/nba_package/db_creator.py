import requests
import pandas as pd
import sqlite3 as sq

from bs4 import BeautifulSoup
from sqlalchemy import create_engine

#scrapes Summary tables from basketball reference
class SummaryScrape:
    def __init__(self, year):
        self.year = year

    def make_data(self):
        #Import soup from basketball reference url
        url_foo = "https://www.basketball-reference.com/leagues/NBA_yr_totals.html"
        sauce = requests.get(url_foo.replace("yr", str(self.year))).text
        soup = BeautifulSoup(sauce, "lxml")

        #extract table content
        db_data = [[data.text for data in record.find_all("td")]
        for record in soup.find_all("tr")]

        #extract table header
        cols = [header.text for header in soup.find("tr").find_all("th")]

        #create data frame
        data = pd.DataFrame(db_data[1:], columns=cols[1:])
        data.dropna(how="all", axis=0, inplace=True)
        data.drop_duplicates(subset="Player", keep="first", inplace=True)

        #Format strings to numeric
        data.loc[:,"G":] = data.loc[:,"G":].apply(pd.to_numeric)
        data["Age"]=pd.to_numeric(data["Age"])

        #Remove null values
        [data[list].fillna(0, inplace=True) for list in ["FG%", "3P%", "2P%",
         "eFG%", "FT%"]]

        #Create Year Column in DataFrame
        data["Year"] = self.year
        data = data.rename(columns = {"FG%":"FGpct", "3P%":"3pct", "2P%":"2pct",
        "eFG%":"eFG", "FT%":"FTpct"})


        #Clean columns
        data = data.drop(["Pos", "Age", ], axis=1)

        #Per Game stats
        normal = ["MP", "ORB", "DRB", "TRB", "AST", "STL", "BLK", "TOV", "PTS"]

        for label in normal:
            data[label] = data[label]/data["G"]

        return data

#Iterates and Scrapes from Team Pages
class PlayerScrape:
    def __init__(self, year):
        self.year = year
        self.teams = ['OKC', 'PHO', 'ATL', 'MIA', 'CLE',
        'DEN', 'SAS', 'CHI', 'UTA', 'BRK', 'NYK', 'POR',
        'MEM', 'IND', 'MIL', 'HOU', 'TOR', 'WAS', 'ORL',
        'CHO', 'SAC', 'LAL', 'DAL', 'MIN', 'BOS', 'GSW',
        'LAC', 'PHI', 'DET', 'NOP',]
        self.url = "https://www.basketball-reference.com/teams/TM/yr.html"

    def get_players(self):

        #create empty dataframe
        p_table=pd.DataFrame()

        #Scrape Data
        for item in self.teams:
            #edit url
            url_foo = self.url.replace("yr", str(self.year))
            url_foo = url_foo.replace("TM", item)

            #create the sauce
            sauce = requests.get(url_foo).text
            soup = BeautifulSoup(sauce,"lxml")

            #find column names
            roster_header = [[t.text for t in p.find_all("th")]
            for p in soup.find_all("tr")][0][1:]

            #extract databa
            roster_data = [[t.text for t in p.find_all("td")]
            for p in soup.find_all("tr")][1:]

            #create dataframe
            data = pd.DataFrame(roster_data, columns=roster_header)

            #add url
            player_url =[p.find("a") for p in soup.find_all("tr")][1:]
            player_url =[url.get("href") for url in player_url]
            data["URL"] = player_url

            #add team and year
            data["Year"] = self.year

            #append to DataFrame
            p_table = p_table.append(data)

            #Reset URL
            url_foo =self.url

        #Birthday to Datetime
        p_table["Birth Date"] = pd.to_datetime(p_table["Birth Date"])

        #rename headers
        p_table.rename(columns={'\xa0':"Country"}, inplace=True)

        #Remove rookie experience
        p_table["Exp"] = p_table["Exp"].replace("R", 0)

        #creating numeric columns
        pd.to_numeric([p_table["Exp"], p_table["Year"], p_table["Wt"]],
        errors="coerce")

        return p_table


#scrapes from salaries Page
def get_contracts():
    #create soup
    url = "https://www.basketball-reference.com/contracts/players.html"
    soup = BeautifulSoup(requests.get(url).text, "lxml")

    #get headers
    headers = [[item.text for item in tr.find_all("th")]
    for tr in soup.find_all("tr")][1][1:]

    #get columns
    columns = [[td.text.replace(",", "").replace("$","") for td in item.find_all("td")]
    for item in soup.find_all("tr")][2:]

    #create DataFrame
    contract_data = pd.DataFrame(columns, columns=headers)

    #turn numeric columns to float
    labels = ["2019-20", "2020-21", "2021-22",
    "2022-23","2023-24", 'Guaranteed']
    contract_data[labels] = contract_data[labels].replace("", 0).fillna(0)



    return contract_data
#print(SummaryScrape(2019).make_data())
#    print(contract_data.tail())

#Test Code
#print(get_contracts())


#<table class="suppress_all stats_table sliding_cols" id="team_and_opponent" data-cols-to-freeze="1"><caption>Team and Opponent Stats Table</caption>

#===============================================================================
#Make Tables
#summary_tabel = SummaryScrape(2019).make_data()
#p_table = PlayerScrape(2019).get_players()
contract_data = get_contracts()


##Create Database
engine = create_engine(r"sqlite:///C:\Users\Pedro\Desktop\Programs\chipy_sports_app\sporting_webapp\nba.db")

contract_data.to_sql("Contracts", con = engine, if_exists= "replace", chunksize = 10)
# p_table.to_sql("Player Info", con = engine, if_exists="replace", chunksize = 10)
#summary_tabel.to_sql("Summary Stats", con= engine, if_exists="replace", chunksize=10)

#Test Code



#===============================================================================
