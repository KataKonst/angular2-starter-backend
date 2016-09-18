import { Component, ViewEncapsulation } from '@angular/core';
import {NgIf} from '@angular/common';
import {UserService} from '../../services/UserService'
import {User} from '../../models/User'

@Component({
  selector: 'welcomeuser',
  templateUrl: '../../templates/user/welcome.html'
})
export class WelcomeUserComponent {

  public name : String = null;
  constructor(private userService: UserService) {}
  public handleClick() : void {

  }


}
