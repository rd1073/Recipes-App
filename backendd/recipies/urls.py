from django.urls import path
from .views import RecipeView, CategoryView

urlpatterns = [
    path('recipes/', RecipeView.as_view()),
    path('categories/', CategoryView.as_view()),
    path('recipes/<int:pk>/', RecipeView.as_view())



]
 