import {Component, Input} from '@angular/core';
import {User} from '../user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent{

  @Input() newUser: User;

}
