from django.db import models

# Create your models here.
class PhotoModel(models.Model):
    file = models.ImageField(upload_to="gallery")