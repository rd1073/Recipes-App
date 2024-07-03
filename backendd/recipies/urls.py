from django.urls import path
from .views import RecipeView, CategoryView,RecipesByCategoryView, RecipeSearchView

urlpatterns = [
    path('recipes/', RecipeView.as_view()),
    path('categories/', CategoryView.as_view()),
    path('recipes/<int:pk>/', RecipeView.as_view()),
    path('recipes/category/<int:category_id>/', RecipesByCategoryView.as_view(), name='recipe-category'),
    path('recipes/search/', RecipeSearchView.as_view(), name='recipe-search'),
  # GET recipes by category




]
 