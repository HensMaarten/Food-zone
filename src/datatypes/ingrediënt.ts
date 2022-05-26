/**
 * This interface defines the attributes that each task requires.
 */
export interface IIngredient {
  id: string;
  naam: string;
  hoeveelheid: number;
  eenheid: string;
}

/**
 * This class implements the interface above.
 * In this case, an implementing class is a bit of an overkill, because there is
 * no clear difference between the class and interface.
 * Only use a class when the class requires methods to manipulate the data, as
 * long as there are no methods an interface suffices.
 */
export class Ingredient implements IIngredient {
  id: string;
  naam: string;
  hoeveelheid: number;
  eenheid: string;

  constructor(id: string,naam: string,hoeveelheid: number, eenheid: string) {
   this.id = id;
   this.naam = naam;
   this.hoeveelheid = hoeveelheid;
   this.eenheid = eenheid;
  }
}
