/**
 * This interface defines the attributes that each task requires.
 */
export interface IAllergy {
  _id: string;
  naam: string;
}

/**
 * This class implements the interface above.
 * In this case, an implementing class is a bit of an overkill, because there is
 * no clear difference between the class and interface.
 * Only use a class when the class requires methods to manipulate the data, as
 * long as there are no methods an interface suffices.
 */
export class Allergy implements IAllergy {
  _id: string;
  naam: string;

  constructor(naam: string) {
    this.naam = naam;
  }
}
