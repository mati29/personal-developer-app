import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenStorage} from './storage/token.storage';
import {Router} from '@angular/router';
import {AuthService} from './auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  authenticated: boolean; //TODO change for async operation
  subscription: Subscription;

  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorage) {
  }

  ngOnInit() {
    this.subscription = this.tokenStorage.tokenChanged.subscribe(
      (tokenExist: boolean) => {
        this.authenticated = tokenExist;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigate(['/']);
  }
}
