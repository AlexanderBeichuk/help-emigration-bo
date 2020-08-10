import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private storage: StorageService,
  ) { }

  public signOut(): void {
    this.storage.removeStorageBearerToken()
  }

}
