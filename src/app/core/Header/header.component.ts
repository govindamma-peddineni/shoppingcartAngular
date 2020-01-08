import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../../recipes/recipes.service';
// import { Response } from '@angular/http';
import { Recipe } from '../../recipes/recipe.model';
import { map } from 'rxjs/operators';
import 'rxjs/RX';
import { AuthService } from '../../auth/auth.Service';
// import { HttpEvent , HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
//  @Output() featureSelected = new EventEmitter<string>();
// onSelect(feature: string) {
//   this.featureSelected.emit(feature);
// }
constructor(private recipeService: RecipeService,
public authService: AuthService) {} // to use the service here we have ot write this
onSaveData() {
  this.recipeService.storeRecipes()
  .subscribe(
    (response) => {
      console.log(response);
    }, (error) => console.log(error)
  );
  //// below one is for http and httpclient without event parameter(3rd one) in recipes.service.ts file storerecipes()
  // .subscribe(
  //   (response: Response) => {
  //     console.log(response);
  //   }, (error) => console.log(error)
  // );
}
onFetchData() {
  this.recipeService.fetchRecipes();
  // .
  //  map(
  //    (recipes: Recipe[]) => {

  //       for (const recipe of recipes) {
  //               if (!recipe['ingredients']) {
  //                recipe['ingredients'] = [];
  //             }
  //             }
  //              return recipes;
  //    }
    // )
  //  .catch(
  //    (error: Response) => {
  //      console.log(error);
  //       return Observable.throw('some thing went wrong');
  //    }
  // );
    //  .subscribe(
    //  (recipes: Recipe[]) => {
    //          this.recipeService.setRecipes(recipes);
    //    }
    // );
    // subscribe(
    //  (response: Response) => {
    //     const recipes: Recipe[] = response.json();
    //    this.recipeService.setRecipes(recipes);
    //   },
    //  (error) => console.log(error)
    // );
}
onLogout() {
  this.authService.logout();
}
}
