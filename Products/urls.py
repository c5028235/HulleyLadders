from django.urls import path
from Products.views.productpage import ProductPage
from Products.views.categorypage import CategoryPageView
from Products.views.productpageAPI import ProductPageAPI

urlpatterns = [
    path("products/<slug:slug>/", ProductPage.as_view(), name="product"),
    path("category/<slug:slug>/", CategoryPageView.as_view(), name="category"),
    path("api/products/<slug:slug>/", ProductPageAPI.as_view(), name="product")
]
