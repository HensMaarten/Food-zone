export interface ImenuItem {
  date: Date;
  dishId: string;
}
export class MenuItem implements ImenuItem{
  date: Date;
  dishId: string;
  constructor(date: Date, dishId: string) {
    this.date = date;
    this.dishId = dishId;
  }
}
