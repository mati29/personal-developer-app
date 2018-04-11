import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from './user.model';
import {UserService} from './user.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 //https://stackoverflow.com/questions/47051485/angular-material-2-table-mat-row-click-event-also-called-with-button-click-in-ma
  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'button'];
  dataSources = new MatTableDataSource();

  //orgData: any;
  //filterData: any;

  filterOfName = '';
  filterOfLast = '';
  filterOfMail = '';


  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( (data: User[]) => {
        //this.orgData = data;
       // this.filterData = data;
        this.dataSources.data = data;
      });
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId)
      .subscribe( data => {
        this.dataSources.data = this.dataSources.data.filter((u: User) => u.id !== userId);
        //this.dataSource.data = this.orgData ;
      });
  }

  /*searchByName() {
    this.filterData = this.orgData.filter( (u: User) => u.firstName.startsWith(this.filterOfName));
    this.dataSource.data = this.filterData;
  }*/

}
