from django.db import models

# Create your models here.
class NflSummary(models.Model):
    name = models.TextField(db_column='Name', blank=True, primary_key=True,)
    pos = models.TextField(db_column='Pos', blank=True, null=True)
    year = models.BigIntegerField(db_column='Year', blank=True, null=True)
    gp = models.BigIntegerField(db_column='GP', blank=True, null=True)
    average_points_scored = models.TextField(db_column='Average Points Scored',
     blank=True, null=True)
    std = models.TextField(db_column='STD', blank=True, null=True)
    average_points_allowed = models.TextField(db_column='Average Points Allowed',
     blank=True, null=True)
    defense_std = models.TextField(db_column="Defense's STD", blank=True,
     null=True)

    class Meta:
        managed = False
        db_table = 'NFL Summary'

class NflStats(models.Model):
    name = models.TextField(db_column='Name', blank=True, primary_key=True,)
    pos = models.TextField(db_column='Pos', blank=True, null=True)
    year = models.BigIntegerField(db_column='Year', blank=True, null=True)
    team = models.TextField(db_column='Team', blank=True, null=True)
    week = models.BigIntegerField(db_column='Week', blank=True, null=True)
    oppt = models.TextField(db_column='Oppt', blank=True, null=True)
    h_a = models.TextField(db_column='h/a', blank=True, null=True)
    yh_points = models.TextField(db_column='YH points', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'NFL Stats'

class DefensiveSummary(models.Model):
    oppt = models.TextField(db_column='Oppt', blank=True, primary_key=True)
    pos = models.TextField(db_column='Pos', blank=True, null=True)
    yh_points = models.TextField(db_column='YH points', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Defensive Summary'

class DefensiveStats(models.Model):
    oppt = models.TextField(db_column='Oppt', blank=True, primary_key=True)
    week = models.BigIntegerField(db_column='Week', blank=True, null=True)
    pos = models.TextField(db_column='Pos', blank=True, null=True)
    yh_points = models.TextField(db_column='YH points', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Defensive Stats'
