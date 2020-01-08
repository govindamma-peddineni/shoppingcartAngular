import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router ) { }
              /** 3 parameter is navigate method. we injected through Router */

  ngOnInit() {
    // here we are retriving recipedetails
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id']; /**  here + operator for converting params['id'] string data to int
    here we get the dynamic 'id' of recipes now we have to get the recipe details through recipe service*/
  this.recipe = this.recipeService.getRecipe(this.id);
  }
  );
  }
  onAddToShopingList() {
this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
   // this.router.navigate(['../', 'this.id', 'edit'], {relativeTo: this.route});
   // in either of the ways we can do
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
