from Products.models.product import Product
from rest_framework import serializers
from Products.serializers.category_serializer import CategorySerializer


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = '__all__'  #
