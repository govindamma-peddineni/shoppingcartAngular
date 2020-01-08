import * as firebase1 from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) {}
  signupUser(email: string, password: string) {
    firebase1.auth().createUserWithEmailAndPassword (email, password)
    .catch(
      error => console.log(error)
    );
  }
  signinuser(email: string, password: string) {
    firebase1.auth().signInWithEmailAndPassword (email, password)
    .then(
      response => {
        this.router.navigate(['/']);
        firebase1.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        );
      }
    )
    .catch(
      error => console.log(error)
    );
  }
  getToken() {
 firebase1.auth().currentUser.getIdToken()
 .then(
  (token: string) => this.token = token
);
return this.token;
  }
  isAuthenticated() {
return this.token  != null;
  }
  logout() {
    firebase1.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin']); // after logout to redirect the user to signin page
  }
}
