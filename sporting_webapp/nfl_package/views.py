from django.shortcuts import render
from django.http import HttpResponse

from.NFLmodels import NFLPlayerSummary as nps

from .serializers import NFLSummarySerializer

from rest_framework import viewsets
from django.core.serializers import serialize

# Create your views here.
def index(request):
    return render(request, "nfl_page.html")

class NFLSummaryView(viewsets.ModelViewSet):
        queryset = nps.objects.all()
        serializer_class = NFLSummarySerializer

        def get_queryset(self):
            queryset = nps.objects.all()

            player = self.request.query_params.get('player', None)
            pos = self.request.query_params.get("pos", None)
            year = self.request.query_params.get("year", None)

            if player is not None:
                queryset = queryset.filter(player = player)

            if pos is not None:
                queryset = queryset.filter(pos = pos)

            return queryset
