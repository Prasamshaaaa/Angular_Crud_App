import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add headers, log requests, handle errors, etc.
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer myAuthToken')
    });
    return next.handle(modifiedReq);
  }
}
