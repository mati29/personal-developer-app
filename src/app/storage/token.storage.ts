import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

const TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorage {

  tokenChanged = new Subject<boolean>();//TODO change strategy async checked token

  constructor() { }

  public signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
    this.tokenChanged.next(false);
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,  token);
    this.tokenChanged.next(true);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}
