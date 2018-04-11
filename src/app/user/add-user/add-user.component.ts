import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  userForm: FormGroup;

  hidePassword = true;

  constructor(public snackBar: MatSnackBar, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      'firstName' : new FormControl(null, Validators.required),//utrwalanie nazw maybe
      'lastName' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'username' : new FormControl(null, Validators.required),//TODO sprawdzanie uniqalnośći usera websocket?
      'password' : new FormControl(null, [Validators.required, Validators.min(3)])//TODO min doesn't work validator error?
    });
  }

  createUser(): void {
    this.userService.createUser(this.userForm.value)
      .subscribe( data => {
        this.snackBar.open("User created", "successful", {
          duration: 2000,
        });
      });

  }

}
