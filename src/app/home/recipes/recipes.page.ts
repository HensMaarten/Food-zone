import { Component} from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import {IRecipe} from '../../../datatypes/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage {
  initialTimeValue: number;
  minTimeValue: number;
  maxTimeValue: number;
  isVeganFilter: boolean;
  isGlutenFilter: boolean;
  isLactoseFilter: boolean;
  // recipes is an array of all the recipes that are available on the api while recipeList is an array of all the recipes that will
  // be shown
  recipes: IRecipe[];
  recipeList: IRecipe[];
  recipesLimit: number;

  constructor(public recipeService: RecipeService) {
    this.maxTimeValue = 360;
    this.minTimeValue = 0;
    this.isVeganFilter = false;
    this.isGlutenFilter = false;
    this.isLactoseFilter = false;
    this.initialTimeValue = this.maxTimeValue;
    this.recipesLimit = 5;
    this.getRecipes();
  }
  getRecipes(){
    this.recipes = this.recipeService.filterRecipe(this.isVeganFilter,this.isLactoseFilter,this.isGlutenFilter,this.initialTimeValue);
    this.recipeList = this.recipes.slice(0,this.recipesLimit);
  }
  loadData(event) {
    setTimeout(() => {
      this.recipesLimit += 5;
      this.recipeList = this.recipes.slice(0,this.recipesLimit);
      event.target.complete();
      if(this.recipeList.length >= this.recipes.length){
        event.target.disabled = true;
      }
    }, 500);
  }
  sliderChange(event){
    this.initialTimeValue = event.target.value;
    this.getRecipes();
  }
  veganChange(event){
    this.isVeganFilter = event.target.checked;
    this.getRecipes();
  }
  glutenChange(event){
    this.isGlutenFilter = event.target.checked;
    this.getRecipes();
  }
  lactoseChange(event){
    this.isLactoseFilter = event.target.checked;
    this.getRecipes();
  }
}
