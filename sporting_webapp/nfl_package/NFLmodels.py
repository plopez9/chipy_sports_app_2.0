from django.db import models

# Create your models here.
class NFLPlayerSummary(models.Model):
    player = models.TextField(db_column='Name', blank=True, null=False,
    primary_key=True,)
    pos = models.TextField(db_column='Pos', blank=True, null=True)
    year = models.BigIntegerField(db_column='Year', blank=True, null=True)

    class meta():
        managed = False
        db_table = "NFL Summary"
