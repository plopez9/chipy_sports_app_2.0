from rest_framework import serializers
from .NFLmodels import NflSummary

class NflSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = NflSummary
        fields = ("name", "pos", "year", "gp", "average_points_scored", "std",
        "average_points_allowed", "defense_std")
        read_only_fields = [f.name for f in NflSummary._meta.get_fields()]
