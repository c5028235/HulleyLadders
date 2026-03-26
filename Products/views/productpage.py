from django.shortcuts import render
from django.views.generic import ListView
# Create your views here.
from Products.models.product import Product

class ProductPage(ListView):
	model = Product
	Template_name = 'product.html'
	context_object_name = 'product'

	def get_queryset(self):
		return Product.objects.get(id='pk')