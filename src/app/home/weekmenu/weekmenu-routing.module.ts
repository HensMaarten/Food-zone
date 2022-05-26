import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekmenuPage } from './weekmenu.page';

const routes: Routes = [
  {
    path: '',
    component: WeekmenuPage
  },
  {
    path: 'recipe/:id',
    loadChildren: () => import('../recipe/recipe.module').then( m => m.RecipePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeekmenuPageRoutingModule {}
