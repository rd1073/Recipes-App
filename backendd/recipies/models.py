from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    ingredients = models.TextField()
    instructions = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='recipes')
    image = models.ImageField(upload_to='recipes/', null=True, blank=True)  # New field for image


    def __str__(self):
        return self.title
