import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRecipe} from '../../datatypes/recipe';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly baseURL = 'https://r0739214-foodapi.netlify.app/.netlify/functions/api';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getRecipes(): Observable<IRecipe[]> {
    return this.http
      .get<IRecipe[]>(
        `${this.baseURL}/gerechten`,
        {
          observe: 'body',
          responseType: 'json'
        }
      );
  }
}
