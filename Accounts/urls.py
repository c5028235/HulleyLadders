from django.urls import path
from .views.register import RegisterView
from .views.logout import LogoutView
from .views.login import LogInView
from .views.homeview import HomePageView
from .views.aboutview import AboutView
from .views.api.homeAPIview import HomePageAPIView
from Accounts.views.api.registerAPI import RegisterAPIView
from rest_framework_simplejwt.views import TokenObtainPairView


urlpatterns = [
    path('', HomePageView.as_view(), name="home"),
    path('about/', AboutView.as_view(), name = 'about'),
    path('logout/', LogoutView.as_view(), name = 'logout'),
    path('api/home/', HomePageAPIView.as_view(), name="homeAPI"),
    path("register/", RegisterAPIView.as_view(), name="registerAPI"),
    path("login/", TokenObtainPairView.as_view(), name="login")
]
