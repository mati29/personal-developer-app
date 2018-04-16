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
export class AppComponent {
  title = 'app';

}
