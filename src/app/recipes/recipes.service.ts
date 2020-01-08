import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Http, Response, ResponseType } from '@angular/http';
import { AuthService } from '../auth/auth.Service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
// import 'rxjs/map';
import 'rxjs/add/operator/map';

 @Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
//  recipeselected = new EventEmitter<Recipe>();
  /** below we metioned recipes as private , so we cannot direcly access this arrary from out side of this service  */
 private recipes: Recipe[] = [
    new Recipe('Over Night Oatmeal',
     'Oatmeal recipe description',
     'https://c1.staticflickr.com/4/3468/3294687099_f49fba48e7_b.jpg',
    [
      new Ingredient('Oats', 1 ),
      new Ingredient('banana', 1),
      new Ingredient('walnuts', 5)
    ]),
     new Recipe('Fruit salad',
     'Fruit Salad recipe description',
      'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg',
    [
      new Ingredient('pomogranate', 1),
      new Ingredient('banana', 1),
      new Ingredient('apple', 1),
      new Ingredient('kiwi', 1)
    ]
    ),
     new Recipe('Alu gravy Curry',
     'Alu recipe description',
      'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg',
    [
      new Ingredient('potato', 4),
      new Ingredient('tomato', 2),
      new Ingredient('onion', 2)
    ])
      ];
      /** as we mentioned above arrary as private we need some method to call that arrarylist */
      getRecipes () {
       return this.recipes.slice(); /** by using slice() we can send the copy of the arrary to out side of the service  */
      }
      getRecipe(index: number) {
return this.recipes[index];
      }
      // getsearcrecipes(text: string) {
      //   return this.recipes.s
      // }
      constructor(private slService: ShoppingListService,
       // private http: Http,
        private httpclient: HttpClient,
      private authService: AuthService) {}
      /** above one is for adding ingredients to shopping list and second parameter to save the details into server to pass the request*/
      storeRecipes()  {
        // const header = new HttpHeaders().set('Authorization', 'Bearer afdklasflaldf');
      //  const token = this.authService.getToken();
        // put method over rides all data in the firebase.we should mention 'recipes.json' at the end of url
        // (we get it from firebase) if we dont mention recipes.json at the end we will get cross site error.
        // we can mention any name after 'https://ng-recipe-book-b8acf.firebaseio.com/' that is over choice.
        // but in final we have to specify .json
     /*   return this.httpclient.put('https://ng-recipe-book-b8acf.firebaseio.com/recipes.json',
       this.getRecipes(),
       {observe: 'body',
      // headers: new HttpHeaders().set('Authorization', 'Bearer afdklasflaldf').append()
      // this is for normal webApi as backend server. append is used to add more headers
    params: new HttpParams().set('auth', token)
    }); */
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-b8acf.firebaseio.com/recipes.json',
    this.getRecipes(), {reportProgress: true});
    // this.getRecipes(), {reportProgress: true, params: new HttpParams().set('auth', token)});
   return  this.httpclient.request(req);
       /* return this.http.put('https://ng-recipe-book-b8acf.firebaseio.com/recipes.json?auth=' + token, this.getRecipes());
      // the above statment returns only observable we have to subscribe this observable in header.component.ts */
      }
      fetchRecipes() {
      // const token = this.authService.getToken();
      // return   this.http.get('https://ng-recipe-book-b8acf.firebaseio.com/recipes.json?auth=' + token);
             // this.httpclient.get<Recipe[]>('https://ng-recipe-book-b8acf.firebaseio.com/recipes.json?auth=' + token).
              this.httpclient.get('https://ng-recipe-book-b8acf.firebaseio.com/recipes.json',
            { observe: 'body', // if we mention 'response' instead of 'body' we get all the resonse
          responseType: 'json'}) // here we can mention 'text','blob'(to download the file),'arraybuffer'(to buffer the data)
              .map(
                (recipes: Recipe[]) => {
console.log(recipes);
                   for (const recipe of recipes) {
                           if (!recipe['ingredients']) {
                             console.log(recipe);
                            recipe['ingredients'] = [];
                // for suppose if we delete all the ingredients from the recipes. that time in the firebase we dont get any ingredients.
                // because of that reason,when the ingrdiens are empty.we added recipe['ingredients'] = [];for ingredient column in firebase
                         }
                         }
                          return recipes;
                })
                .subscribe (
                    (recipes: Recipe[]) => {
                     //  const recipes: Recipe[] = response.json(); // for http we need this
                     this.setRecipes(recipes);
                    },
                   (error) => console.log(error)
                  );
      // .map
      //  (
        //// if it is httpclient we dont get response
        //// (recipes: Recipe[]) => {
      //     reming for loop same
      ///// below one if we use http
      //   (response: Response) => {
      //     const recipes: Recipe[] = response.json();
      //     for (let recipe of recipes) {
      //       if (!recipe['ingredients']) {
      //         recipe['ingredients'] = [];
      //       }
      //     }
      //     return recipes;
      //   }
      // )
        // .subscribe(
        //   (response: Response) => {
        //     const recipes: Recipe[] = response.json();
        //     this.setRecipes(recipes);
        //   }
        // );
      }
      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
       this.slService.addIngredients(ingredients);
       }
       addRecipe(recipe: Recipe) {
         this.recipes.push(recipe);
         this.recipesChanged.next(this.recipes.slice());
       }
       updateRecipe(index: number, newRecipe: Recipe) {
         this.recipes[index] = newRecipe;
         this.recipesChanged.next(this.recipes.slice());
       }
       deleteRecipe(index: number) {
         this.recipes.splice(index, 1);
         this.recipesChanged.next(this.recipes.slice());
       }
    }
