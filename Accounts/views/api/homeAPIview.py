from rest_framework.generics import ListAPIView
from Products.models.product import Product
from Products.serializers.product_serializer import ProductSerializer

class HomePageAPIView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(available=True)[:6]