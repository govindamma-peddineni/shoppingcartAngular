import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase' ;

  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//   title = 'Angular app';
//   name = 'Sanjana';
//   loadedFeature = 'recipe';
//   onNavigate(feature: string) {
// this.loadedFeature = feature;
 // }
 ngOnInit() {
firebase.initializeApp({
  apiKey: 'AIzaSyCbpxYgjrvlJl_rwqew4z68TcGOVjYlX3g',
    authDomain: 'ng-recipe-book-b8acf.firebaseapp.com'
});
 }
}
