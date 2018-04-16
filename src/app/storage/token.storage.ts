import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {TokenModel} from './token.model';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

const TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorage {

  constructor(private router: Router) { }

  public signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
    this.router.navigate(['/']);
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,  token);
    this.logoutWhenExpired(token);
  }

  async logoutWhenExpired(token: string) {
    const token_data = jwt_decode(token);
    await delay(((<TokenModel>token_data).exp-(<TokenModel>token_data).iat)*1000);
    this.signOut();
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}

function delay(ms: number) {
  return new Promise<void>(function(resolve) {
    setTimeout(resolve, ms);
  });
}
