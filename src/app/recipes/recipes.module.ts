import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesListDirective } from './recipes-list.directive';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RecipesRoutingModule } from './recipes-routing.module';
import { ShortenPipe } from '../shorten.pipe';
import { RecipesearchPipe } from '../pipes/recipesearch.pipe';

import { Sharedmodule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RecipeEditComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipesListComponent,
    RecipeStartComponent,
    RecipesDetailComponent,
    RecipesListDirective,
    ShortenPipe,
    RecipesearchPipe
    ],
    imports: [
      CommonModule, // it gives access to the common directives(ngclass,ngif , ngfor...) in the application
      ReactiveFormsModule, // we used this at only in recipes forms
      RecipesRoutingModule,
      Sharedmodule
              ]

})
export class RecipesModule { }
// note: we cannot duplicate the same module in formsmodule and appmodule. it should be only one. we must not dulicate our declaration.
// here in this case we use recipecomponet here we cannot declare the same component in app.module.ts file.
