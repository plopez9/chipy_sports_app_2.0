from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register("NFLSummary", views.NFLSummaryView)
router.register("NFLStats", views.NFLStatView)
router.register("DefensiveSummary", views.DefensiveSummaryView)
router.register("DefensiveStats", views.DefensiveStatsView)


urlpatterns = [
    path('', views.index, name='index'),
    path("", include(router.urls)),
]
