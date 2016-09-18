import { Component, ViewEncapsulation } from '@angular/core';
import {NgIf} from '@angular/common';
import {UserService} from '../../services/UserService'
import {User} from '../../models/User'

@Component({
  selector: 'register',
  templateUrl: '../../templates/user/register.html'
})
export class RegisterComponent {

user=  new User("test","test","test");
  public name : String = null;
  constructor(private userService: UserService) {}
  public handleClick() : void {

  }
public newUser() :void{
  alert(this.user.name);
  this.userService.register(this.user).subscribe(x=>alert(x));
}

}
