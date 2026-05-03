from django.contrib import admin
from .models.category import Category
from .models.product import Product

# Register your models here.
admin.site.register(Category)
admin.site.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "base_price",
        "available",
        "featured",
    )


    list_filter = (
        "available",
        "featured",
        "category",
    )


    search_fields = ("name",)


    prepopulated_fields = {
        "slug": ("name",)
    }




# @admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {
        "slug": ("name",)
    }