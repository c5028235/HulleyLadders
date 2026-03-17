from django.urls import path
from .views.register import RegisterView
from .views.login import LogInView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LogInView.as_view(), name = 'login')
]
