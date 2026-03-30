from django.views.generic import ListView
from Products.models.category import Category
from Products.models.product import Product


class CategoryPageView(ListView):
    model = Product
    template_name = "category.html"
    context_object_name = "products"

    def get_queryset(self):
        return Product.objects.filter(
            Category_slug=self.kwargs['slug'], available=True
        )

    def get_context_data(self, **kwargs):

        context = super().get_context_data(**kwargs)
        context["category"] = Category.objects.get(self.kwargs['slug'])
        return context
