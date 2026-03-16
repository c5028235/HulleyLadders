from django.contrib.auth.views import LoginView
from django import forms
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.contrib import messages


class CustomLoginView(LoginView):
    template_name = "user/login.html"
    redirect_authenticated_user = True
    success_url = reverse_lazy('home')


    def get_success_url(self):
        return self.success_url