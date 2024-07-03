# Recipe Blog

## Introduction

Recipe Blog is a web application that allows users to view, add, update, delete, search and filter recipies. The entire application is completely responsive and works seamlessly.

## Features

- View all recipes
- Add new recipes
- Update existing recipes
- Delete recipes
- Search recipes 
- Filter recipes by category

## Technologies

### Backend

- Django
- Django REST Framework
- PostgreSQL

### Frontend

- React
- Tailwind CSS
- Axios
 

### Backend

The backend provides RESTful API endpoints to manage recipes and categories. Here are some example endpoints:

- `GET /recipes/` - Retrieve all recipes
- `POST /recipes/` - Add a new recipe
- `GET /recipes/<id>/` - Retrieve a specific recipe
- `PUT /recipes/<id>/` - Update a specific recipe
- `DELETE /recipes/<id>/` - Delete a specific recipe
- `GET /categories/` - Retrieve all categories
- `GET /recipes/category/<category_id>/` - Retrieve recipes by category
- `GET /recipes/search/?search=<title>` - Search recipes by title

### Frontend

The frontend provides a user interface to interact with the backend API. Users can view, add, update, delete, and search recipes through a web browser.

 




 
