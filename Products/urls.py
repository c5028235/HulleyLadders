from django.urls import path
from Products.views.productpage import ProductPage
from Products.views.categorypage import CategoryPageView

urlpatterns = [
    path("product/<int:pk>/", ProductPage.as_view(), name = "product"),
    path("category/<int:pk>/", CategoryPageView.as_view(), name = "category")
]