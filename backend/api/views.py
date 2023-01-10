from .models import *
from bson import ObjectId
from .serializers import dealSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import authentication_classes, permission_classes
from django.views.decorators.csrf import csrf_exempt

@authentication_classes([])
@permission_classes([])
class DealViewSet(viewsets.ViewSet):

    def list(self, request):
        products = deal.objects.all()
        serializer = dealSerializer(products, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        id = pk
        if id is not None:
            products = deal.objects.get(_id=ObjectId(id))
            serializer = dealSerializer(products)
            return Response(serializer.data)

    def create(self, request):
        serializer = dealSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': "Data Created"}, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk):
        id = pk
        products = deal.objects.get(_id=ObjectId(id))
        serializer = dealSerializer(products, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': "Complete Data Updated!"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk):
        id = pk
        products = deal.objects.get(_id=ObjectId(id))
        serializer = dealSerializer(products, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': "Partial Data Updated!"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk):
        id = pk
        products = deal.objects.get(_id=ObjectId(id))
        products.delete()
        return Response({"msg": "Data Deleted"})