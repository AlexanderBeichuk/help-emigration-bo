import { Injectable } from '@angular/core';

const BEARER = 'Bearer';
const USER_ROLE = 'role';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  public setStorageBearerToken(token: string) {
    localStorage.setItem(BEARER, token);
  }

  public getStorageBearerToken(): string {
    return localStorage.getItem(BEARER);
  }

  public removeStorageBearerToken(): void {
    localStorage.removeItem(BEARER);
  }
  public setStorageUserRole(role: string): void {
    localStorage.setItem(USER_ROLE, role);
  }

  public getStorageUserRole(): string {
    return localStorage.getItem(USER_ROLE);
  }

  public removeStorageUserRole(): void {
    localStorage.removeItem(USER_ROLE);
  }
}
