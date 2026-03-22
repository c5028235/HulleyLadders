from django.db import models
from .models.category import Category


class Product(models.Models):
	name = models.CharField(max_length = 100)
	slug = models.SlugField(max_length = 100, blank=True, unique = True)
	Category = models.ForeignKey(Category, on_delete = models.CASCADE, default = 1)
	description = models.TextField(blank = True, null = True)
	base_price = models.DeecimalField(default = 0, decimal_palces = 2)
	Image = models.ImageField(upload_to = ‘uploads/products/’)

	def __str__(self):
		return self.name
