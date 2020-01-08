import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


export class ShoppingListService {
 // ingredientsChanged = new EventEmitter<Ingredient[]>();
 ingredientsChanged = new Subject<Ingredient[]>();
 // we use this subject to listen the index value of shopping list by shopping-edit component.
 startedEditing = new Subject<number>();
 private ingredients: Ingredient[] = [
    new Ingredient('apples', 10) ,
    new Ingredient('banana', 5)
    ];
    getIngredients() {
     return  this.ingredients.slice();
     /** by using slice() method we can access only copy of the ingredients not original ingrddient array data*/
    // return  this.ingredients;
    }
    getingredient(index: number) {
      return this.ingredients[index];
    }
    addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
     // this.ingredientsChanged.emit(this.ingredients.slice());
     this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
// for (let ingredi of ingredients) {
//   this.addIngredient(ingredi);
this.ingredients.push(...ingredients);
/** this will convert an array of elements to list of elements. for that we used '...'spread operator infront of ingredients */
// this.ingredientsChanged.emit(this.ingredients.slice()); /** after spread we have to emit */
this.ingredientsChanged.next(this.ingredients.slice());
}
updateIngredient(index: number, newIngredient: Ingredient) {
  this.ingredients[index] = newIngredient;
  this.ingredientsChanged.next(this.ingredients.slice());
}
deleteIngredient(index: number) {
this.ingredients.splice(index , 1);
this.ingredientsChanged.next(this.ingredients.slice());
}
}

