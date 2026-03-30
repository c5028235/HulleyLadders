from django.shortcuts import render
from django.views.generic import DetailView
# Create your views here.
from Products.models.product import Product


class ProductPage(DetailView):
    model = Product
    template_name = 'product.html'
    context_object_name = 'product'
    slug_field = "slug"
    slug_url_kwarg = "slug"
