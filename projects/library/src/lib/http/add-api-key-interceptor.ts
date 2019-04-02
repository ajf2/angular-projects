import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Adds an API key to the headers of outgoing HTTP requests.
 */
@Injectable()
export class AddApiKeyInterceptor implements HttpInterceptor {
  private apiKey = '';

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = req.clone({
      headers: req.headers.set('X-ApiKey', this.apiKey)
    });
    return next.handle(newRequest);
  }
}
