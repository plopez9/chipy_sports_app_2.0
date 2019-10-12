# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class SummaryStats(models.Model):
#    index = models.BigIntegerField(blank=True, null=True)
    player = models.TextField(db_column='Player', blank=True, null=False,
    primary_key=True,)
    tm = models.TextField(db_column='Tm', blank=True, null=True)
    g = models.BigIntegerField(db_column='G', blank=True, null=True)
    gs = models.BigIntegerField(db_column='GS', blank=True, null=True)
    mp = models.DecimalField(db_column='MP', blank=True,
     null=True, decimal_places= 1, max_digits=4,)
    fg = models.BigIntegerField(db_column='FG', blank=True, null=True)
    fga = models.BigIntegerField(db_column='FGA', blank=True, null=True)
    fg_percent = models.DecimalField(db_column='FGpct', blank=True, null=True,
    decimal_places= 3, max_digits=4,)
    number_3p = models.BigIntegerField(db_column='3P', blank=True, null=True)
    number_3pa = models.BigIntegerField(db_column='3PA', blank=True, null=True)
    number_3p_field = models.DecimalField(db_column='3pct', blank=True,
    null=True, decimal_places= 3, max_digits=4,)
    number_2p = models.BigIntegerField(db_column='2P', blank=True, null=True)
    number_2pa = models.BigIntegerField(db_column='2PA', blank=True, null=True)
    number_2p_field = models.DecimalField(db_column='2pct', blank=True,
    null=True, decimal_places=3, max_digits=4,)
    efg_field = models.DecimalField(db_column='eFG', blank=True, null=True,
    decimal_places=3, max_digits=4,)
    ft = models.BigIntegerField(db_column='FT', blank=True, null=True)
    fta = models.BigIntegerField(db_column='FTA', blank=True, null=True)
    ft_field = models.DecimalField(db_column='FTpct', blank=True, null=True,
    decimal_places=3, max_digits=4,)
    orb = models.DecimalField(db_column='ORB', blank=True,
     null=True, decimal_places= 1, max_digits=4,)
    drb = models.DecimalField(db_column='DRB', blank=True,
     null=True, decimal_places= 1, max_digits=4,)
    trb = models.DecimalField(db_column='TRB', blank=True,
     null=True, decimal_places= 1, max_digits=4,)
    ast = models.DecimalField(db_column='AST', blank=True,
     null=True, decimal_places= 1, max_digits=4,)
    stl = models.DecimalField(db_column='STL', blank=True,
     null=True, decimal_places= 1, max_digits=4,)
    blk = models.DecimalField(db_column='BLK', blank=True,
     null=True, decimal_places= 1, max_digits=4,)
    tov = models.DecimalField(db_column='TOV', blank=True,
     null=True, decimal_places= 1, max_digits=4,)
    pf = models.BigIntegerField(db_column='PF', blank=True, null=True)
    pts = models.DecimalField(db_column='PTS', blank=True,
     null=True,  decimal_places= 1, max_digits=4,)
    year = models.BigIntegerField(db_column='Year', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Summary Stats'

class PlayerInfo(models.Model):
#    index = models.BigIntegerField(blank=True, null=True)
    player = models.TextField(primary_key=True,
    db_column='Player', blank=True, null=False,)
    pos = models.TextField(db_column='Pos', blank=True, null=True)
    ht = models.TextField(db_column='Ht', blank=True, null=True)
    wt = models.BigIntegerField(db_column='Wt', blank=True, null=True)
    birth_date = models.DateTimeField(db_column='Birth Date',
     blank=True, null=True)
    country = models.TextField(db_column='Country', blank=True, null=True)
    exp = models.BigIntegerField(db_column='Exp', blank=True, null=True)
    college = models.TextField(db_column='College', blank=True, null=True)
    url = models.TextField(db_column='URL', blank=True, null=True)
    year = models.BigIntegerField(db_column='Year', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Player Info'

class Contracts(models.Model):
#    index = models.BigIntegerField(blank=True, null=True)
    player = models.TextField(primary_key=True,
    db_column='Player', blank=True, null=False)
    tm = models.TextField(db_column='Tm', blank=True, null=True)
    number_2019_20 = models.BigIntegerField(db_column='2019-20',
     blank=True, null=True)
    number_2020_21 = models.BigIntegerField(db_column='2020-21',
     blank=True, null=True)
    number_2021_22 = models.BigIntegerField(db_column='2021-22',
     blank=True, null=True)
    number_2022_23 = models.BigIntegerField(db_column='2022-23',
    blank=True, null=True)
    number_2023_24 = models.BigIntegerField(db_column='2023-24',
    blank=True, null=True)
    signed_using = models.TextField(db_column='Signed Using',
    blank=True, null=True)
    guaranteed = models.BigIntegerField(db_column='Guaranteed',
    blank=True, null=True,)

    class Meta:
        managed = False
        db_table = 'Contracts'
