import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as Stomp from 'stompjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  private userWebSocket: any;

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

  startUserWebsocketCommunication(uniqueUsername: BehaviorSubject<boolean>) {
    let socket = new WebSocket("ws://localhost:8080/personal-developer/webSocket");
    this.userWebSocket = Stomp.over(socket);
    let that = this;
    this.userWebSocket.connect({}, function(frame) {
      that.userWebSocket.subscribe("/errors", function(message) {
        alert("Error " + message.body);
      });
      that.userWebSocket.subscribe("/usernameUnique/reply", function(message) {
        uniqueUsername.next(<boolean>message.body);
      });
    }, function(error) {
      alert("STOMP error " + error);
    });
  }

  stopUserWebsocketCommunication() {
    if (this.userWebSocket != null) {
      this.userWebSocket.ws.close();
    }
  }

  sendUsernameMessage(username : string) {
    this.userWebSocket.send("/username/check", {}, username);
  }
}

