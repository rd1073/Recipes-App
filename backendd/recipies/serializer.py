from rest_framework import serializers



from .models import Recipe, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        #fields = '__all__'
        fields = ['id', 'title', 'ingredients', 'instructions', 'category', 'image']
