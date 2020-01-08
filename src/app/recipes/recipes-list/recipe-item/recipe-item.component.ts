import { Component, OnInit , Input} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe; /**we dont initialize this 'Recipe'here. it gets the data from outside if we give @Input() decerator
// here we send this 'recipe' to 'recipies-list.component.html ' to loop the items*/
// @Output() recipeselected = new EventEmitter<void> (); // instead of this we use service
  // constructor(private recipeservice: RecipeService) { }
@Input() index: number; /** now we can pass this index from the outside of the component
now in this case from recipes-list component*/
  ngOnInit() {
  }
  /**when we click this 'onselected' in 'recipe-item.component.html' it comes below code *
   * and executes eventemitter and send the output of perticular recipe details to "recipe-list.component.html"
   from that location to we have to redirect the details to "recipes.component.html"
  for this we write onemore funtion "onrecipeselected()" */
//  onselected() {
//    this.recipeservice.recipeselected.emit(this.recipe);
// //   // this.recipeselected.emit(); // instead of this we use service
//  }
}
