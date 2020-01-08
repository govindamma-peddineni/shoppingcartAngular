import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.Service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   console.log('intercepted!', req);
   const copiedreq = req.clone({params: req.params.set('auth', this.authService.getToken())});
   // return next.handle(req); // we r continuing the request to the backend server through 'next'
  return next.handle(copiedreq);
  }
}
