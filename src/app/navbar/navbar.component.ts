import { Component, OnInit } from '@angular/core';
import {AdminGuard} from '../auth/admin/admin.guard';
import {AuthGuard} from '../auth/auth.guard';
import {TokenStorage} from '../storage/token.storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private adminGuard: AdminGuard, private authGuard: AuthGuard, private tokenStorage: TokenStorage) { }

  ngOnInit() {
  }

  adminComponentVisible(): boolean {
    return this.adminGuard.isAdminRole();
  }

  authenticated(): boolean {
    return this.authGuard.isAuthenticated();
  }

  logout() {
    this.tokenStorage.signOut();
  }

}
