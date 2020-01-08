import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { HttpModule } from '@angular/http';
 import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './core/Header/header.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { RecipesListDirective } from './recipes/recipes-list.directive';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighliterDirective } from './better-highliter/better-highliter.directive.ts.directive';
import { UnlessDirective } from './structuraldirective/unless.directive.ts.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsDemoComponent } from './forms/forms-demo/forms-demo.component';
import { RecipeService } from './recipes/recipes.service';
// import { ShortenPipe } from './shorten.pipe';
import { FiltersComponent } from './pipes/filters/filters.component';
// import { RecipesearchPipe } from './pipes/recipesearch.pipe';
// import { SignupComponent } from './auth/signup/signup.component';
// import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.Service';
import { AuthGuard } from './auth/auth-guard.service';
// import { RecipesModule } from './recipes/recipes.module';
import { Sharedmodule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
// import { HomeComponent } from './core/home/home/home.component';
import { CoreModule } from './core/core.module';
// import { ReactiveApproachComponent } from './forms/reactive-approach/reactive-approach.component';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighliterDirective,
    UnlessDirective,
    FormsDemoComponent,
   // ReactiveApproachComponent
   // ShortenPipe,
   FiltersComponent,
  // HomeComponent
  // RecipesearchPipe,
  //  SignupComponent,
  //  SigninComponent
   ],
  imports: [
    BrowserModule, // here we dont have a commonmodule. since this browsermodule contains all the featers of
    // commonmodule and some extra featers to need to start the application.
    // so we use browser module here and commonmodule in othermoduls.
  //  RecipesModule, // for eager loding we have to write here.but for lazyloding we have to mention in aap.routingmodule
    ShoppingListModule,
     FormsModule,
      HttpModule, // to add httpclient we commented this(to get the response or to send the request to backend server)
       HttpClientModule,
      AppRoutingModule,
       Sharedmodule,
       AuthModule,
       CoreModule
    ],
 // providers: [ShoppingListService, RecipeService, AuthService, AuthGuard],
 providers: [], // we have provided all the above services in core module
  bootstrap: [AppComponent]
})
export class AppModule { }
