import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StorageService} from '../services/storage.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.storageService.getStorageBearerToken()}`
      }
    });
    return next.handle(request);
  }
}
