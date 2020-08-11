import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';
import {MessageService} from 'primeng';
import {ToastEnum} from '../models/entity.enum';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    // private toast: MessageService
  ) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.authenticationService.signOut();
        // location.reload();
      }
      const error = err.error.message || err.statusText;
      // this.toast.add({
      //   severity: ToastEnum.success,
      //   summary: err.status,
      //   detail: error
      // })
      return throwError(err);
    }));
  }
}
