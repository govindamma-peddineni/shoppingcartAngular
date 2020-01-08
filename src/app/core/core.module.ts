import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './Header/header.component';
import { Sharedmodule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipes.service';
import { AuthService } from '../auth/auth.Service';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { AuthGuard } from '../auth/auth-guard.service';
import { LoggingInterceptor } from '../shared/logging.interceptor';


@NgModule({
declarations: [
  HomeComponent,
  HeaderComponent
  // when we open the site localhost:4200 that time we are binding header and home components.
],
imports: [
  Sharedmodule,
  // because we have dropdown in header component
  AppRoutingModule // we need routingufnctionality in header. in app.module we exported this
],
exports: [
  AppRoutingModule,
  // in appcomponethtml page we use "<router-outlet></router-outlet>
  HeaderComponent
  // in appcomponethtml page we use <app-header ></app-header>
],
providers: [
  ShoppingListService,
  RecipeService,
  AuthService,
  AuthGuard,
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  // based on the order we set here interceptor will execute
]
})
export class CoreModule {

}
