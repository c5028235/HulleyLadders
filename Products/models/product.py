from django.db import models
from Products.models.category import Category


class Product(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, blank=True, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)
    description = models.TextField(blank=True, null=True)
    base_price = models.DecimalField(default=0, max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='uploads/products/')
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name
