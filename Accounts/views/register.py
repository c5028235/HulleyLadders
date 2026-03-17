from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import FormView
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.contrib import messages


class RegisterView(FormView):
    template_name = "accounts/register.html"
    form_class = UserCreationForm
    success_url = reverse_lazy("login")

    def form_valid(self, form):
        form.save()
        super().form_valid(form)
        messages.success(self.request, "Registration successful")
        return redirect(self.success_url)
