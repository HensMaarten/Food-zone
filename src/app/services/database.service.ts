import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {ImenuItem, MenuItem} from '../../datatypes/menuItem';
import {
  collection,
  doc,
  Firestore, getDoc, setDoc
} from '@angular/fire/firestore';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  defaultArray: ImenuItem[] = [];
  constructor(private authService: AuthService, private fireStore: Firestore) {
    this.defaultArray.push(new MenuItem(new Date(), ''));
    this.initializeDefaultArray();
  }
     initializeDefaultArray(): ImenuItem[]{
    for(let x = 1; x < 7; x++){
      this.defaultArray.push(new MenuItem(new Date(Date.now() - (x * 24 * 60 * 60 * 1000)),''));
    }
    for(let i = 1; i <= 7; i++){
      this.defaultArray.push(new MenuItem(new Date(Date.now() + (i * 24 * 60 * 60 * 1000)),''));
    }
    this.defaultArray = this.defaultArray.sort((a: ImenuItem, b: ImenuItem) => a.date.getTime() - b.date.getTime());
    return this.defaultArray;
  }
  async sendData(array: ImenuItem[]){
      const dishesRef = collection(this.fireStore, 'weekMenus');
      await setDoc(doc(dishesRef, this.authService.getUserUID()), {
        menu: [{
          date: Number(array[0].date),
          dishId: array[0].dishId,
        },
          {
            date: Number(array[1].date),
            dishId: array[1].dishId,
          },
          {
            date: Number(array[2].date),
            dishId: array[2].dishId,
          },
          {
            date: Number(array[3].date),
            dishId: array[3].dishId,
          },
          {
            date: Number(array[4].date),
            dishId: array[4].dishId,
          },
          {
            date: Number(array[5].date),
            dishId: array[5].dishId,
          },
          {
            date: Number(array[6].date),
            dishId: array[6].dishId,
          },
          {
            date: Number(array[7].date),
            dishId: array[7].dishId,
          },
          {
            date: Number(array[8].date),
            dishId: array[8].dishId,
          },
          {
            date: Number(array[9].date),
            dishId: array[9].dishId,
          },
          {
            date: Number(array[10].date),
            dishId: array[10].dishId,
          },
          {
            date: Number(array[11].date),
            dishId: array[11].dishId,
          },
          {
            date: Number(array[12].date),
            dishId: array[12].dishId,
          },
          {
            date: Number(array[13].date),
            dishId: array[13].dishId,
          },
        ]
        //date: datum,
        //dishId: recipeId
      });
    }

  async getData(): Promise<Array<ImenuItem>>{
    if (this.authService.isLoggedIn()){
      const dishesRef = doc(this.fireStore, 'weekMenus', this.authService.getUserUID());
      const docSnap = await getDoc(dishesRef);
      if(docSnap.exists()) {
        this.defaultArray.map(x => {
          docSnap.data().menu.map(y => {
            if(formatDate(x.date,'yyyy-MM-dd', 'en-US') === formatDate(y.date,'yyyy-MM-dd', 'en-US')){
              x.dishId = y.dishId;
            }
          });
        });
      }
      return this.defaultArray;
    }
  }
}
