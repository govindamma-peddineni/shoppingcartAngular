import {Component , OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
  // /** since it is the parent class of recipes folder we informed to angular which service we are using for recipes  */
})
export class RecipesComponent implements OnInit {
// selectedrecipe: Recipe;
  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
  // // this.recipeservice.getRecipes();
  //   this.recipeservice.recipeselected.subscribe(
  //     (recipe: Recipe) => {
  //       this.selectedrecipe = recipe;
  //     }

  // );
  }

}

