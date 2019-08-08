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
