from distutils.command import upload
from email.policy import default
# from django.db import models
from djongo import models


# Create your models here.
class deal(models.Model):
    _id=models.ObjectIdField()
    name=models.CharField(max_length=400)
    price=models.CharField(max_length=400)
    image=models.CharField(max_length=400)
    totalRating=models.IntegerField(default=3)
    degree=models.IntegerField(default=3)