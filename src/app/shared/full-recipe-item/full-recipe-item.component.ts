import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import {DatabaseService} from '../../services/database.service';
import {IRecipe} from '../../../datatypes/recipe';
import { Router } from '@angular/router';
import {Ingredient} from '../../../datatypes/ingrediënt';
import {ImenuItem, MenuItem} from '../../../datatypes/menuItem';
import {formatDate} from '@angular/common';
import {Clipboard} from '@capacitor/clipboard';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-full-recipe-item',
  templateUrl: './full-recipe-item.component.html',
  styleUrls: ['./full-recipe-item.component.scss'],
})
export class FullRecipeItemComponent implements OnInit {
  @Input() recipe: IRecipe;
  ingredients: Ingredient[];
  today: Date= new Date();
  maxDay: Date = new Date();
  maxDayString: string;
  minDay: Date= new Date();
  minDayString: string;
  initialValue: number;
  menu: ImenuItem[] = [];
  aantalPersonenOpties: number[] = [1,2,3,4,5,6,7,8,9,10];
  constructor(public recipeService: RecipeService,
              public router: Router, public databaseService: DatabaseService, public authService: AuthService,) {
    this.maxDay = new Date(Date.now() + (7 * 24 * 60 * 60 * 1000));
    this.minDay = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000));
    this.maxDayString = this.maxDay.toISOString().split('T')[0];
    this.minDayString = this.minDay.toISOString().split('T')[0];
  }
  addMenuItem(event){
    const value = formatDate(event.detail.value,'yyyy-MM-dd', 'en-US');
    this.menu.map(x => {
      if(formatDate(x.date,'yyyy-MM-dd', 'en-US') === value){
        console.log('gevonden');
        // eslint-disable-next-line no-underscore-dangle
        x.dishId = this.recipe._id;
      }
    });
    this.databaseService.sendData(this.menu);
}
  initializeMenu() {
    this.databaseService.getData().then(x => this.menu = x);
    console.log(this.menu);
  }
    ngOnInit(): void {
    this.ingredients = this.recipe.Ingrediënten;
    this.initialValue = this.recipe.aantalPersonen;
    this.initializeMenu();
  }
  changeAmount(event): void {
  this.ingredients.map(x => x.hoeveelheid = x.hoeveelheid / this.initialValue * event.target.value);
  this.initialValue = event.target.value;
}
 writeToClipboard = async () => {

    await Clipboard.write({
      // eslint-disable-next-line id-blacklist
      string: this.ingredients.map(x => JSON.stringify( x.hoeveelheid + ' ' + x.eenheid + ' ' + x.naam)).join(',')
    });
  };
}
