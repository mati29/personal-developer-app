import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {TokenStorage} from '../storage/token.storage';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private tokenStorage: TokenStorage) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return (this.tokenStorage.getToken() != null);
  }
}
