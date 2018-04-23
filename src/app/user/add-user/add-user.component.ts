import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {User} from '../user.model';
import {UserError} from '../user-error.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnDestroy{

  userForm: FormGroup;

  hidePassword = true;

  newUser: User = null;

  usernameUnique: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(public snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.usernameCheckActive();
    this.userForm = new FormGroup({
      'firstName' : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      'lastName' : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      'email' : new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(255)]),
      'username' : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)])
    });
    this.usernameUnique.subscribe();
  }

  ngOnDestroy() {
    this.usernameCheckDeactive();
  }

  createUser(): void {
    this.userService.createUser(this.userForm.value)
      .subscribe( (userData: User) => {
        this.newUser = userData;
      },
        (err: ErrorEvent) =>{
          this.snackBar.open((<UserError>err.error).errors[0].field, (<UserError>err.error).errors[0].defaultMessage, {duration: 1500});
          Observable.interval(2000)
            .take((<UserError>err.error).errors.length-1)
            .subscribe(i => {
              this.snackBar.open((<UserError>err.error).errors[i+1].field, (<UserError>err.error).errors[i+1].defaultMessage, {duration: 1500});
            });
      });
  }

  usernameCheckActive() {
    this.userService.startUserWebsocketCommunication(this.usernameUnique);
  }

  usernameCheckDeactive() {
    this.userService.stopUserWebsocketCommunication();
  }

  checkUsernameUnique() {
    this.userService.sendUsernameMessage(this.userForm.controls['username'].value);
  }


}
