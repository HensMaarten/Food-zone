import { Allergy } from './Allergy';
import { Ingredient } from './ingrediënt';

/**
 * This interface defines the attributes that each task requires.
 */
export interface IRecipe {
  _id: string;
  naam: string;
  foto: string;
  bereidingstijd: number;
  aantalPersonen: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Ingrediënten: Ingredient[];
  bereidingswijze: string;
  review: number;
  userReview?: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Allergieën: Allergy[];
}

/**
 * This class implements the interface above.
 * In this case, an implementing class is a bit of an overkill, because there is
 * no clear difference between the class and interface.
 * Only use a class when the class requires methods to manipulate the data, as
 * long as there are no methods an interface suffices.
 */
export class Recipe implements IRecipe {
  _id: string;
  naam: string;
  foto: string;
  bereidingstijd: number;
  aantalPersonen: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Ingrediënten: Ingredient[];
  bereidingswijze: string;
  review: number;
  userReview?: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Allergieën: Allergy[];

  constructor(naam: string, foto: string, bereidingstijd: number, aantalpersonen: number,
              bereidingswijze: string, review: number, ingredienten: Ingredient[], allergy: Allergy[]) {
    this.naam = naam;
    this.foto = foto;
    this.bereidingstijd = bereidingstijd;
    this.aantalPersonen = aantalpersonen;
    this.bereidingswijze = bereidingswijze;
    this.review = review;
    this.Ingrediënten = ingredienten;
    this.Allergieën = allergy;
  }
}
