from django.urls import path
from Products.views.productpage import ProductPage
from Products.views.categorypage import CategoryPageView

urlpatterns = [
    path("product/<slug:slug>/", ProductPage.as_view(), name="product"),
    path("category/<slug:slug>/", CategoryPageView.as_view(), name="category")
]
