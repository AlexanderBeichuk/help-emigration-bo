import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {StorageService} from '../services/storage.service';
import {Url} from '../models/url.enum';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private storageService: StorageService,
  ) {}
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.storageService.getStorageBearerToken() &&
      route.data.role &&
      route.data.role.indexOf(this.storageService.getStorageUserRole()) !== -1) {
      return true;
    }
    this.router.navigate([`${Url.Login}`]);
    return false;
  }
}
