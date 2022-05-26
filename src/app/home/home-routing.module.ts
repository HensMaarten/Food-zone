import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipePageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  },
  {
    path: 'weekmenu',
    loadChildren: () => import('./weekmenu/weekmenu.module').then( m => m.WeekmenuPageModule)
  },
  {
    path: 'recipe/:id',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  }
//  {
  //   path: 'login',
//   loadChildren: () => import ('/src/app/login/login.module').then(m => m.LoginPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
