from django.contrib import admin
from .models.category import Category
from .models.product import Product

# Register your models here.
admin.site.register(Category)
admin.site.register(Product)