from django.db import models
from Products.models.product import Product


class ProductVariation(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="variations")
    size_code = models.CharField(max_length=10)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    height = models.IntegerField()


    def __str__(self):
        return f"{self.product.name} - {self.size_code}"