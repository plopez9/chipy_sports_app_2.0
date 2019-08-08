from django.contrib import admin

# Register your models here.

from .NFLmodels import NflSummary, NflStats, DefensiveSummary, DefensiveStats

admin.site.register(NflSummary)
admin.site.register(NflStats)
admin.site.register(DefensiveSummary)
admin.site.register(DefensiveStats)
