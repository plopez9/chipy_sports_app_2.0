from rest_framework import serializers
from .NFLmodels import NFLPlayerSummary

class NFLSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = NFLPlayerSummary
        fields = ("player", "pos", "year")
#        read_only_fields = [f.name for f in PlayerInfo._meta.get_fields()]
