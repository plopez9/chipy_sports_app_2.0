from django.contrib import admin

# Register your models here.

from .NFLmodels import NFLPlayerSummary

admin.site.register(NFLPlayerSummary)
