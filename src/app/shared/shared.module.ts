import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import {IonicModule} from '@ionic/angular';
import {FullRecipeItemComponent} from './full-recipe-item/full-recipe-item.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [RecipeItemComponent, FullRecipeItemComponent],
  exports: [
    RecipeItemComponent, FullRecipeItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule {
}
