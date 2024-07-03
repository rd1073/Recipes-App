from django.shortcuts import render
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Recipe, Category
from .serializer import RecipeSerializer, CategorySerializer
from rest_framework.parsers import MultiPartParser, FormParser


class RecipeView(APIView):
    parser_classes = (MultiPartParser, FormParser)


    def post(self, request, format=None):
        data = request.data
        serializer = RecipeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Recipe Added Successfully", safe=False)
        return JsonResponse("Failed to Add Recipe", safe=False)
    
    def get(self, request, pk=None, format=None):
        if pk:
            recipe = self.get_object(pk)
            serializer = RecipeSerializer(recipe)
        else:
            recipes = Recipe.objects.all()
            serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)
    
    def get_object(self, pk):
        try:
            return Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            raise Http404
   

    def put(self, request, pk, format=None):
        recipe = self.get_object(pk)
        data = request.data
        serializer = RecipeSerializer(recipe, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Recipe Updated Successfully", safe=False)
        return JsonResponse({"error": "Failed to Update Recipe", "details": serializer.errors}, safe=False)

    def delete(self, request, pk, format=None):
        recipe = self.get_object(pk)
        recipe.delete()
        return JsonResponse("Recipe Deleted Successfully", safe=False)
    

    
    
    
class CategoryView(APIView):
    def post(self, request, format=None):
        data = request.data
        serializer = CategorySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Category Added Successfully", safe=False)
        return JsonResponse("Failed to Add category", safe=False)

    def get(self, request, pk=None, format=None):
        if pk:
            category = self.get_object(pk)
            serializer = CategorySerializer(category)
        else:
            categories = Category.objects.all()
            serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

# Create your views here.


class RecipesByCategoryView(APIView):
    def get(self, request, category_id, format=None):
        try:
            category = Category.objects.get(pk=category_id)
            recipes = Recipe.objects.filter(category=category)
            serializer = RecipeSerializer(recipes, many=True)
            return Response(serializer.data)
        except Category.DoesNotExist:
            raise Http404("Category not found")

