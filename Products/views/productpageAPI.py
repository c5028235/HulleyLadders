from rest_framework.generics import RetrieveAPIView
from Products.models.product import Product
from Products.serializers.product_serializer import ProductSerializer


class ProductPageAPI(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "slug"
