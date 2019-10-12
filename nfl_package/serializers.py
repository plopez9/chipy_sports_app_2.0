from rest_framework import serializers
from .NFLmodels import NflSummary, NflStats, DefensiveSummary, DefensiveStats

class NflSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = NflSummary
        fields = ("name", "pos", "year", "gp", "average_points_scored", "std",
        "average_points_allowed", "defense_std")
        read_only_fields = [f.name for f in NflSummary._meta.get_fields()]

class NflStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NflStats
        fields = ("name", "pos", "year", "team", "week", "h_a", "oppt",
         "yh_points")
        read_only_fields = [f.name for f in NflStats._meta.get_fields()]

class DefensiveSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = DefensiveSummary
        fields = ("oppt", "pos", "points_allowed", "gp", "std")
        read_only_fields = [f.name for f in DefensiveSummary._meta.get_fields()]

class DefensiveStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DefensiveStats
        fields = ("oppt", "week", "pos", "points_allowed",)
        read_only_fields = [f.name for f in DefensiveStats._meta.get_fields()]
