from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register("test", views.NFLSummaryView)

urlpatterns = [
    path('', views.index, name='index'),
    path("json", include(router.urls)),
]
