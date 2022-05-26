import { Component} from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import {DatabaseService} from '../../services/database.service';
import {MenuItem} from '../../../datatypes/menuItem';
@Component({
  selector: 'app-weekmenu',
  templateUrl: './weekmenu.page.html',
  styleUrls: ['./weekmenu.page.scss'],
})
export class WeekmenuPage{
  i = 0;
  weekmenu: MenuItem[];
  constructor(public recipeService: RecipeService, public databaseService: DatabaseService) {
  }
  ionViewWillEnter() {
    this.databaseService.getData().then(x => this.weekmenu = x);
  }
  convertToDate(test: any){
    return new Date(test).toDateString();
  }
 add(){
    if (this.i < 13){
      this.i++;
    }
 }
 subtract(){
   if (this.i > 0){
     this.i--;
   }
 }
}
