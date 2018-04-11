import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  private userUrl = '/users';

  public getUsers() {
    return this.http.get(this.userUrl + '/user');
  }

  public deleteUser(userId) {
    return this.http.delete(this.userUrl + '/user/' + userId);
  }

  public createUser(user) {
    return this.http.post(this.userUrl + '/new', user);
  }

}
