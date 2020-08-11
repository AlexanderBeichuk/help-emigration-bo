import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';
import {FormBuilder} from '@angular/forms';
import {AuthorizationUser, User} from '../models/user.model';
import {HttpService} from './http.service';
import {Url} from '../models/url.enum';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private storage: StorageService,
    private httpService: HttpService
  ) { }

  public login(user: AuthorizationUser): Observable<User> {
    return this.httpService.post(Url.Login, user)
      .map( (response: any) => {
        this.storage.setStorageBearerToken(response.bearerToken);
        const currentUser  = this.convertDataToUser(response.data);
        this.storage.setStorageUserRole(currentUser.role);
        return currentUser;
      });
  }

  public signOut(): void {
    this.storage.removeStorageBearerToken()
  }

  private convertDataToUser(data: any): User {
    return new User(
      data.id,
      data.email,
      data.password,
      data.name,
      data.role,
      data.subscription_type,
      new Date(data.subscription_date),
      data.phone,
      data.country,
      data.city,
      new Date(data.updated_at),
      new Date(data.created_at)
    );
  }

}
