import { Component, OnInit, EventEmitter , Output, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
 // @Output() recipewasselected = new EventEmitter<Recipe>(); /** to listin the funtion
  // from outside means from "recipes.component.html" we mentionted it as @output() */
recipes: Recipe [] ;
searchtext: string;
subscription: Subscription;
filteredStatus = '';
  constructor(private recipeservice: RecipeService,
              private router: Router,
              private route: ActivatedRoute ) {
  } /** here we injected the service of 'RecipeService'
   2.router is to redirect to that path. here in this case"http://localhost:4200/recipes/new"
   3. we can come  to know about the current route. here in this case "http://localhost:4200/recipes/" */

  ngOnInit() {
  this.subscription =  this.recipeservice.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
this.recipes = recipes;
      }
    );
   this.recipes = this.recipeservice.getRecipes();
  }
//   onrecipeselected(recipe: Recipe) {
// this.recipewasselected.emit(recipe);
/** here we are passing the recipe details of perticular selected recipe to "recipes.component.html" */
//   }

onNewrecipe() {
this.router.navigate(['new'], {relativeTo: this.route});
/** here the first parameter is the name comes after the existing route (url of that page'http://localhost:4200/recipes/'
 * after this what name we want to dispaly that is the one ), sencond one feteches the url before adding that 'new' */
}
onRecipeSearch() {
  this.recipes = this.recipeservice.getRecipes();
}
ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
