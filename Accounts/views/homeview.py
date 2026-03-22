from django.views.generic import TemplateView
from Products.models.product import Product


class HomePageView(TemplateView):
    product = Product
    template_name= "home.html"