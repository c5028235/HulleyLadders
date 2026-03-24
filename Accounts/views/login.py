from django.contrib.auth.views import LoginView
from django import forms
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.contrib import messages


class LogInView(LoginView):
    template_name = "accounts/login.html"
    redirect_authenticated_user = True
