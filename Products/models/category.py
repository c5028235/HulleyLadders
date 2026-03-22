from django.db import models


class Category(models.Models):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, blank=True, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name
