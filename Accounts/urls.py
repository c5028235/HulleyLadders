from django.urls import path
from .views.register import RegisterView
from .views.login import LogInView
from .views.homeview import HomePageView
from .views.aboutview import AboutView

urlpatterns = [
    path('', HomePageView.as_view(), name="home"),
<<<<<<< HEAD
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LogInView.as_view(), name='login')
    
=======
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LogInView.as_view(), name="login"),
    path('about/', AboutView.as_view(), name = 'about'),
>>>>>>> 0809dad944cff9c7c837c270da7090ca46e2b73d
]
