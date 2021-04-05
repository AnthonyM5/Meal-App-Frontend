# Meal Calculator App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This React application will allow you to build meals using nutrient profiles from the Food Data Central API and render an aggregated nutrient profile of your meal.  It is an attempt to dive into your meals by compiling nutritional breakdown of components. Individual ingredients represnet 1 of 7,000 database records with in-depth nutrient profiles.   The combined meal data can help in unique cases like calorie counting tracking nutrient intake, etc.  The database can be searched by name, and results sorted by nutrient values (calories only for now). 

<a href='https://github.com/antimonysayz/Meal-App-Backend'>More Information on Backend Rails API</a>

Users must create an account or sign in to start creating meals and/or search the food database.  
Meals keep track of total calorie count and contains nutritional records of each "ingredient" in your meal.

Use the prediction tab to test out the image classifier! It will return the top guess from Mobilenet and cocossd (pre-trained tensorflow models)

Check the <a href="https://nutrient-react-front.herokuapp.com/">Live</a> Demo

Or git clone (install all packages with node or yarn) this repo and the back-end repo to deploy locally.

## User Stories:
- Users can create/delete accounts 
- Users can create/delete their own recipes/meals 
- Users have access to food database to search for nutritional value of individual items
- Users can search for recipes based on an image they upload (Spoonacular API required)
- Users can also compile a nutrient list component of all the ingredients on selected meals/recipes.
