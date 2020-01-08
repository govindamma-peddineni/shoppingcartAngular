import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
public description: string;
public imagePath: string;
public ingredients: Ingredient[]; /** here ingredients are Ingredient[] type */
constructor(name: string, desc: string, imagepath: string, ingredients1: Ingredient[]) {
  this.name = name;
this.description = desc;
this.imagePath = imagepath;
this.ingredients = ingredients1;
}
}
