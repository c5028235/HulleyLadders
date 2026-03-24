from django.views.generic import ListView
from Products.models.product import Product


class HomePageView(ListView):
    model = Product
    template_name= "home.html"
    context_object_name = "products"

    def get_queryset(self):
        return Product.objects.filter(available=True)[:6]