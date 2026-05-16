from rest_framework.permissions import IsAdminUser
from rest_framework.generics import CreateAPIView

class CreateProductAPIView(CreateAPIView):
    permission_classes = [IsAdminUser]
