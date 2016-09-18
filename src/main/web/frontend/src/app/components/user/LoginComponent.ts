import { Component, ViewEncapsulation } from '@angular/core';
import {NgIf} from '@angular/common';
import {UserService} from '../../services/UserService'
import {User} from '../../models/User'
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: '../../templates/user/login.html'
})
export class LoginComponent {

user=  new User("test","test","test");
result="false";
  public name : String = null;
  constructor(private userService: UserService,private router:Router) {}

public loginUser() :void{
  this.userService.login(this.user).subscribe(x=>this.result=x["result"]);
     if(this.result==="true"){
  this.router.navigate(['welcomeuser']);
  }

}

}
