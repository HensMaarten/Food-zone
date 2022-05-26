import {Injectable} from '@angular/core';
import {IRecipe, Recipe} from 'src/datatypes/recipe';
import {ApiService} from './api-service';
import {LoadingService} from './loading.service';
import {ConnectionService} from './connection.service';
import {Network} from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})

export class RecipeService  {
  public randomRecipe: IRecipe;
  public recipeList: IRecipe[] = [];

  constructor(public apiService: ApiService, public loadingService: LoadingService,
              public connectionService: ConnectionService) {
      this.handleChange().then();
    Network.addListener('networkStatusChange', () => {
      this.handleChange().then();
    });
  }
  async handleChange(){
    this.connectionService.getStatus().then( () => {
        if (this.connectionService.isConnected.connected){
          this.loadingService.createLoader();
          this.apiService.getRecipes().toPromise().then(x => {
            this.recipeList = x;
            this.randomRecipe = this.getRandomRecipe();
            this.loadingService.dismissLoader();
          });
        }
    }
    );
  }

  getAllRecipes(): IRecipe[] {
    return [... this.recipeList];
  }
  getRandomRecipe(): IRecipe {

    const recipeList = this.getAllRecipes();

 const rdnNumber = Math.floor(Math.random() * (recipeList.length - 1 + 1));
    return recipeList[rdnNumber];
  }
  getRecipe(id: string): Recipe | undefined {
    // eslint-disable-next-line no-underscore-dangle
    const recipe = this.recipeList.find(r => r._id === id);

    return recipe !== undefined  ? {... recipe} : undefined;
  }
  filterRecipe(vegan: boolean = false, lactose: boolean = false, gluten: boolean = false, time: number){
    let filteredArray: IRecipe[] = [];
    let subArray: IRecipe[] = [];
      this.getAllRecipes().map(x => {
        if(x.bereidingstijd <= time){
          filteredArray.push(x); }
      });
      if (vegan) {
        subArray = [];
          filteredArray.map(x => x.Allergieën.map(y => {
            if (y.naam === 'vegan') {
              subArray.push(x);
            }
          }
      ));
          filteredArray = subArray;
      }
    if (lactose) {
      subArray = [];
      filteredArray.map(x => x.Allergieën.map(y => {
          if (y.naam === 'lactosevrij') {
            subArray.push(x);
          }
        }
      ));
      filteredArray = subArray;
    }
    if (gluten) {
      subArray = [];
      filteredArray.map(x => x.Allergieën.map(y => {
          if (y.naam === 'glutenvrij') {
            subArray.push(x);
          }
        }
      ));
      filteredArray = subArray;
    }
    return filteredArray;
  }
}
