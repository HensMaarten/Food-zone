import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { IRecipe } from '../../../datatypes/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import {LoadingController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: IRecipe;
  isShowingLoader = false;
  loader: any;

  constructor(public recipeService: RecipeService, public router: Router, public loadingController: LoadingController,
              public activatedRoute: ActivatedRoute, public alertController: AlertController) {
  }

  ngOnInit(): void {
  }

  async showLoader() {
    if (!this.isShowingLoader) {
      this.isShowingLoader = true;
      this.loader = await this.loadingController.create({
        message: 'Please wait',
        duration: 4000
      });
      return await this.loader.present();
    }
  }

  async stopLoader() {
    if (this.loader) {
      this.loader.dismiss();
      this.loader = null;
      this.isShowingLoader = false;
    }
  }
}
