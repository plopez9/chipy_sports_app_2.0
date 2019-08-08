# Generated by Django 2.1.7 on 2019-08-08 00:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nfl_package', '0006_auto_20190807_1518'),
    ]

    operations = [
        migrations.CreateModel(
            name='NflStats',
            fields=[
                ('name', models.TextField(blank=True, db_column='Name', primary_key=True, serialize=False)),
                ('pos', models.TextField(blank=True, db_column='Pos', null=True)),
                ('year', models.BigIntegerField(blank=True, db_column='Year', null=True)),
                ('team', models.TextField(blank=True, db_column='Team', null=True)),
                ('week', models.BigIntegerField(blank=True, db_column='Week', null=True)),
                ('oppt', models.TextField(blank=True, db_column='Oppt', null=True)),
                ('h_a', models.TextField(blank=True, db_column='h/a', null=True)),
                ('yh_points', models.TextField(blank=True, db_column='YH points', null=True)),
            ],
            options={
                'db_table': 'NFL Stats',
                'managed': False,
            },
        ),
    ]
