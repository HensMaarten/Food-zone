import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import {IRecipe} from 'src/datatypes/recipe';
import { ActivatedRoute } from '@angular/router';
import {ImenuItem} from '../../../datatypes/menuItem';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
 recipe: IRecipe;
 menu: ImenuItem[]= [];
  id?: string = undefined;
  constructor(public activatedRoute: ActivatedRoute, public recipeService: RecipeService,public databaseService: DatabaseService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }
  setData(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id === null) {
      return;
    }
    this.id = id;
    this.recipe = this.recipeService.getRecipe(this.id);
  }
}
