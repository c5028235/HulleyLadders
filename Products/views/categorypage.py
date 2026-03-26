from django.views.generic import ListView
from Products.models.category import Category




class CategoryPageView(ListView):
    model = Category
    template_name= "category.html"
    context_object_name = "categories"


    def get_queryset(self):
        return Category.objects.all()