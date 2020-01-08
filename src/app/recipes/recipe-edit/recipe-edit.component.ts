import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editmode = false;
recipeform: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
  private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editmode = params['id'] != null;
        this.initform();
        // console.log(this.editmode);
      }
    );
  }
  onSubmit() {
           const newRecipe = new Recipe(
this.recipeform.value['name'],
 this.recipeform.value['description'],
 this.recipeform.value['imagepath'],
 this.recipeform.value['ingredients']
      );
      if (this.editmode) {
     // this.recipeService.updateRecipe(this.id, this.recipeform.value);
     /// if we use the above line instead of below one its not fecting the image path properly
      this.recipeService.updateRecipe(this.id, newRecipe);
  } else {
   // this.recipeService.addRecipe(this.recipeform.value);
   this.recipeService.addRecipe(newRecipe);
  }
  this.onCancel();
}
  onAddIngredient() {
(<FormArray>this.recipeform.get('ingredients')).push(
  new FormGroup({
    'name': new FormControl(null, Validators.required), // here null is empty default value
    'amount': new FormControl(null, [Validators.required,
      Validators.pattern(/^[1-9]+[0-9]*$/)
    ])
  })
);
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeform.get('ingredients')).removeAt(index);
  }
  private initform() {
    let recipename = '';
    let recipeImagePath = '';
    let recipedescription = '';
// for ingredients
let recipeIngredients = new FormArray([]);

    if (this.editmode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipename = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipedescription = recipe.description;
      // to get the ingredients in recipe
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
'name': new FormControl(ingredient.name, Validators.required),
'amount': new FormControl(ingredient.amount,
  [Validators.required,
  Validators.pattern(/^[1-9]+[0-9]*$/)
])
            })
          );
        }
      }
    }
    this.recipeform = new FormGroup({
      // we assign the values here. whatever
      // the name given here we need to give the save name
      // to formcontrolName in the html page. after this initialization we need to sync this with html page
'name': new FormControl(recipename, Validators.required),
'imagepath': new FormControl(recipeImagePath, Validators.required),
'description': new FormControl(recipedescription, Validators.required),
'ingredients': recipeIngredients
    });
  }

}
