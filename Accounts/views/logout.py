from django.contrib.auth.views import LogoutView
from django.urls import reverse_lazy


class CustomLogOutView(LogoutView):
    template_name = 'accounts/logout.html'
    success_url = reverse_lazy('logout')


    def get_success_url(self):
        return self.success_url
