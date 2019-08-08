from django.shortcuts import render
from django.http import HttpResponse

from .NFLmodels import NflSummary as nps
from .NFLmodels import NflStats as nfs
from .NFLmodels import DefensiveSummary as dfs
from .NFLmodels import DefensiveStats as dst

from .serializers import NflSummarySerializer
from .serializers import NflStatsSerializer
from .serializers import DefensiveSummarySerializer
from .serializers import DefensiveStatsSerializer

from rest_framework import viewsets
from django.core.serializers import serialize

# Create your views here.
def index(request):
    return render(request, "nfl_page.html")

class NFLSummaryView(viewsets.ModelViewSet):
        queryset = nps.objects.all()
        serializer_class = NflSummarySerializer

        def get_queryset(self):
            queryset = nps.objects.all()

            player = self.request.query_params.get('name', None)
            pos = self.request.query_params.get("pos", None)
            year = self.request.query_params.get("year", None)

            if player is not None:
                queryset = queryset.filter(name =player)

            if pos is not None:
                queryset = queryset.filter(pos = pos)

            if year is not None:
                queryset = queryset.filter(year = year)

            return queryset


class NFLStatView(viewsets.ModelViewSet):
        queryset = nfs.objects.all()
        serializer_class = NflStatsSerializer

        def get_queryset(self):
            queryset = nfs.objects.all()

            player = self.request.query_params.get('name', None)
            pos = self.request.query_params.get("pos", None)
            year = self.request.query_params.get("year", None)
            team = self.request.query_params.get("team", None)
            week = self.request.query_params.get("week", None)
            oppt = self.request.query_params.get("oppt", None)
            h_a = self.request.query_params.get("h_a", None)

            if player is not None:
                queryset = queryset.filter(name = player)

            if pos is not None:
                queryset = queryset.filter(pos = pos)

            if year is not None:
                queryset = queryset.filter(year = year)

            if team is not None:
                queryset = queryset.filter(team = team)

            if week is not None:
                queryset = queryset.filter(week = week)

            if oppt is not None:
                queryset = queryset.filter(oppt = oppt)

            if h_a is not None:
                queryset = queryset.filter(h_a = h_a)

            return queryset

class DefensiveSummaryView(viewsets.ModelViewSet):
        queryset = dfs.objects.all()
        serializer_class = DefensiveSummarySerializer

        def get_queryset(self):
            queryset = dfs.objects.all()

            defense = self.request.query_params.get('oppt', None)
            pos = self.request.query_params.get("pos", None)

            if defense is not None:
                queryset = queryset.filter(oppt = defense)

            if pos is not None:
                queryset = queryset.filter(pos = pos)

            return queryset

class DefensiveStatsView(viewsets.ModelViewSet):
        queryset = dst.objects.all()
        serializer_class = DefensiveStatsSerializer

        def get_queryset(self):
            queryset = dst.objects.all()

            defense = self.request.query_params.get('oppt', None)
            week = self.request.query_params.get("week", None)
            pos = self.request.query_params.get("pos", None)

            if defense is not None:
                queryset = queryset.filter(oppt = defense)

            if week is not None:
                queryset = queryset.filter(week = week)

            if pos is not None:
                queryset = queryset.filter(pos = pos)

            return queryset
