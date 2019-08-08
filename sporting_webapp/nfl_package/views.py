from django.shortcuts import render
from django.http import HttpResponse

from.NFLmodels import NflSummary as nps

from .serializers import NflSummarySerializer

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
