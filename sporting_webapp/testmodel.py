# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Contracts(models.Model):
    index = models.BigIntegerField(blank=True, null=True)
    player = models.TextField(db_column='Player', blank=True, null=True)  # Field name made lowercase.
    tm = models.TextField(db_column='Tm', blank=True, null=True)  # Field name made lowercase.
    number_2018_19 = models.TextField(db_column='2018-19', blank=True, null=True)  # Field renamed to remove unsuitable characters. Field renamed because it wasn't a valid Python identifier.
    number_2019_20 = models.TextField(db_column='2019-20', blank=True, null=True)  # Field renamed to remove unsuitable characters. Field renamed because it wasn't a valid Python identifier.
    number_2020_21 = models.TextField(db_column='2020-21', blank=True, null=True)  # Field renamed to remove unsuitable characters. Field renamed because it wasn't a valid Python identifier.
    number_2021_22 = models.TextField(db_column='2021-22', blank=True, null=True)  # Field renamed to remove unsuitable characters. Field renamed because it wasn't a valid Python identifier.
    number_2022_23 = models.TextField(db_column='2022-23', blank=True, null=True)  # Field renamed to remove unsuitable characters. Field renamed because it wasn't a valid Python identifier.
    number_2023_24 = models.TextField(db_column='2023-24', blank=True, null=True)  # Field renamed to remove unsuitable characters. Field renamed because it wasn't a valid Python identifier.
    signed_using = models.TextField(db_column='Signed Using', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    guaranteed = models.TextField(db_column='Guaranteed', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Contracts'


class DefensiveStats(models.Model):
    week = models.BigIntegerField(db_column='Week', blank=True, null=True)  # Field name made lowercase.
    oppt = models.TextField(db_column='Oppt', blank=True, null=True)  # Field name made lowercase.
    yh_points = models.TextField(db_column='YH points', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. This field type is a guess.
    pos = models.TextField(db_column='Pos', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Defensive Stats'


class DefensiveSummary(models.Model):
    oppt = models.TextField(db_column='Oppt', blank=True, null=True)  # Field name made lowercase.
    pos = models.TextField(db_column='Pos', blank=True, null=True)  # Field name made lowercase.
    yh_points = models.TextField(db_column='YH points', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. This field type is a guess.

    class Meta:
        managed = False
        db_table = 'Defensive Summary'


class NflStats(models.Model):
    pos = models.TextField(db_column='Pos', blank=True, null=True)  # Field name made lowercase.
    name = models.TextField(db_column='Name', blank=True, null=True)  # Field name made lowercase.
    year = models.BigIntegerField(db_column='Year', blank=True, null=True)  # Field name made lowercase.
    week = models.BigIntegerField(db_column='Week', blank=True, null=True)  # Field name made lowercase.
    oppt = models.TextField(db_column='Oppt', blank=True, null=True)  # Field name made lowercase.
    team = models.TextField(db_column='Team', blank=True, null=True)  # Field name made lowercase.
    h_a = models.TextField(db_column='h/a', blank=True, null=True)  # Field renamed to remove unsuitable characters.
    yh_points = models.TextField(db_column='YH points', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. This field type is a guess.

    class Meta:
        managed = False
        db_table = 'NFL Stats'


class NflSummary(models.Model):
    name = models.TextField(db_column='Name', blank=True, null=True)  # Field name made lowercase.
    pos = models.TextField(db_column='Pos', blank=True, null=True)  # Field name made lowercase.
    year = models.BigIntegerField(db_column='Year', blank=True, null=True)  # Field name made lowercase.
    gp = models.BigIntegerField(db_column='GP', blank=True, null=True)  # Field name made lowercase.
    average_points_scored = models.TextField(db_column='Average Points Scored', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. This field type is a guess.
    std = models.TextField(db_column='STD', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    average_points_allowed = models.TextField(db_column='Average Points Allowed', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. This field type is a guess.
    defense_s_std = models.TextField(db_column="Defense's STD", blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. This field type is a guess.

    class Meta:
        managed = False
        db_table = 'NFL Summary'


class PlayerInfo(models.Model):
    index = models.BigIntegerField(blank=True, null=True)
    player = models.TextField(db_column='Player', blank=True, null=True)  # Field name made lowercase.
    pos = models.TextField(db_column='Pos', blank=True, null=True)  # Field name made lowercase.
    ht = models.TextField(db_column='Ht', blank=True, null=True)  # Field name made lowercase.
    wt = models.TextField(db_column='Wt', blank=True, null=True)  # Field name made lowercase.
    birth_date = models.DateTimeField(db_column='Birth Date', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    country = models.TextField(db_column='Country', blank=True, null=True)  # Field name made lowercase.
    exp = models.TextField(db_column='Exp', blank=True, null=True)  # Field name made lowercase.
    college = models.TextField(db_column='College', blank=True, null=True)  # Field name made lowercase.
    url = models.TextField(db_column='URL', blank=True, null=True)  # Field name made lowercase.
    year = models.BigIntegerField(db_column='Year', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Player Info'


class SummaryStats(models.Model):
    index = models.BigIntegerField(blank=True, null=True)
    player = models.TextField(db_column='Player', blank=True, null=True)  # Field name made lowercase.
    tm = models.TextField(db_column='Tm', blank=True, null=True)  # Field name made lowercase.
    g = models.TextField(db_column='G', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    gs = models.TextField(db_column='GS', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    mp = models.TextField(db_column='MP', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    fg = models.TextField(db_column='FG', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    fga = models.TextField(db_column='FGA', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    fgpct = models.TextField(db_column='FGpct', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    number_3p = models.TextField(db_column='3P', blank=True, null=True)  # Field name made lowercase. Field renamed because it wasn't a valid Python identifier. This field type is a guess.
    number_3pa = models.TextField(db_column='3PA', blank=True, null=True)  # Field name made lowercase. Field renamed because it wasn't a valid Python identifier. This field type is a guess.
    number_3pct = models.TextField(db_column='3pct', blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier. This field type is a guess.
    number_2p = models.TextField(db_column='2P', blank=True, null=True)  # Field name made lowercase. Field renamed because it wasn't a valid Python identifier. This field type is a guess.
    number_2pa = models.TextField(db_column='2PA', blank=True, null=True)  # Field name made lowercase. Field renamed because it wasn't a valid Python identifier. This field type is a guess.
    number_2pct = models.TextField(db_column='2pct', blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier. This field type is a guess.
    efg = models.TextField(db_column='eFG', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    ft = models.TextField(db_column='FT', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    fta = models.TextField(db_column='FTA', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    ftpct = models.TextField(db_column='FTpct', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    orb = models.TextField(db_column='ORB', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    drb = models.TextField(db_column='DRB', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    trb = models.TextField(db_column='TRB', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    ast = models.TextField(db_column='AST', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    stl = models.TextField(db_column='STL', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    blk = models.TextField(db_column='BLK', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    tov = models.TextField(db_column='TOV', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    pf = models.TextField(db_column='PF', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    pts = models.TextField(db_column='PTS', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    year = models.BigIntegerField(db_column='Year', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Summary Stats'


class AuthGroup(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)
    name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    last_name = models.CharField(max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    action_flag = models.PositiveSmallIntegerField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.IntegerField(primary_key=True)  # AutoField?
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class NflPackageNflplayersummary(models.Model):
    pos = models.TextField(db_column='Pos', blank=True, null=True)  # Field name made lowercase.
    year = models.BigIntegerField(db_column='Year', blank=True, null=True)  # Field name made lowercase.
    name = models.TextField(db_column='Name', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'nfl_package_nflplayersummary'
