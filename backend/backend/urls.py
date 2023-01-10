from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from api import views

# Creating Router Object
router = DefaultRouter()

router.register('api', views.DealViewSet, basename="deal")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls'))
]

# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]