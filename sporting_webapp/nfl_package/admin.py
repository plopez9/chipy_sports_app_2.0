from django.contrib import admin

# Register your models here.

from .NFLmodels import NflSummary

admin.site.register(NflSummary)
