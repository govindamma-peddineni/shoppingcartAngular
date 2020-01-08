import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from '../recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';



const recipesRoutes: Routes = [
  // {path: 'recipes' , component: RecipesComponent , children: [
  {path: '' , component: RecipesComponent , children: [
  {path: '', component: RecipeStartComponent},
  {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
  {path: ':id', component: RecipesDetailComponent},
  {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
]
},
];
@NgModule({
imports: [
  RouterModule.forChild(recipesRoutes)
],
exports: [RouterModule]
})




export class RecipesRoutingModule {

}
