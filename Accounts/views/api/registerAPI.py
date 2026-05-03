# accounts/views.py
from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from Accounts.views.serializers.register_serializer import RegisterSerializer

class RegisterAPIView(CreateAPIView):
    serializer_class = RegisterSerializer