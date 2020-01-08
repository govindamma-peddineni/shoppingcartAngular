import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { FormsDemoComponent } from './forms/forms-demo/forms-demo.component';
import { FiltersComponent } from './pipes/filters/filters.component';
import { HomeComponent } from './core/home/home/home.component';
import { RecipesModule } from './recipes/recipes.module';
// import { SignupComponent } from './auth/signup/signup.component';
// import { SigninComponent } from './auth/signin/signin.component';
// import { AuthGuard } from './auth/auth-guard.service';

const approuts: Routes = [
  /** what ever the paths we want to mention in the page we specify here */
 // {path: '', redirectTo: '/recipes', pathMatch: 'full'},
 {path: '', component: HomeComponent},
 {path: 'recipes', loadChildren: () => RecipesModule},
 // {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
 // for lazy loding of recipes we commented recipes module in app.module and added the path above
    {path: 'shopping-list' , component: ShoppingListComponent },
  {path: 'forms-demo' , component: FormsDemoComponent },
  {path: 'pipes' , component: FiltersComponent }
];
@NgModule({
imports: [RouterModule.forRoot(approuts)], /**here we configure the routes with routermodule */
exports: [RouterModule] /** we have to export this Router module to main module 'app.module' */
})
export class AppRoutingModule {

}
