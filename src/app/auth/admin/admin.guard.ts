import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {TokenStorage} from '../../storage/token.storage';
import {AuthModel} from '../auth.model';
import * as jwt_decode from 'jwt-decode';
import {TokenModel} from '../../storage/token.model';

@Injectable()
export class AdminGuard implements CanActivate {

  private role_admin = 'ROLE_ADMIN';

  constructor(private tokenStorage: TokenStorage) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAdminRole();
  }

  isAdminRole(): boolean {
    let admin = false;
    const token: string = this.tokenStorage.getToken();
    if (token !== null) {
      const token_data = jwt_decode(token);
      (<TokenModel>token_data).scopes.forEach(
        (auth: AuthModel) => {
          if (auth.authority === this.role_admin) {
            admin = true;
          }
        }
      );
    }
    return admin;
  }
}
