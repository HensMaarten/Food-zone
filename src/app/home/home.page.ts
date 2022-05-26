import {Component} from '@angular/core';
import {RecipeService} from 'src/app/services/recipe.service';
import {LoadingService} from '../services/loading.service';
import {ApiService} from '../services/api-service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public recipeService: RecipeService, public apiService: ApiService, public authService: AuthService,
              public loadingService: LoadingService) {
    this.authService = authService;
  }
}
