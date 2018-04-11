import { Component, OnInit } from '@angular/core';
import {AdminGuard} from '../auth/admin/admin.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private adminGuard: AdminGuard) { }

  ngOnInit() {
  }

  adminComponentVisible(): boolean {
    return this.adminGuard.isAdminRole();
  }

}
