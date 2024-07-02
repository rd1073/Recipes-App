from django.contrib import admin

from .models import Recipe
from .models import Category

models_list = [Recipe,Category]
admin.site.register(models_list)

# Register your models here.
