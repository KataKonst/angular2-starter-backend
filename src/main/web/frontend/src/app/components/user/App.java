import { Component, ViewEncapsulation } from '@angular/core';
import {NgIf} from '@angular/common';
import {UserService} from "./services/UserService";

@Component({
  selector: 'app',
  templateUrl: 'no-content/main.html'
})
export class App {

  public name : String = null;
  constructor(private wikipediaService: WikipediaService) {}
  public handleClick() : void {
    this.wikipediaService.search("dfdsf").subscri111111111111111be(x=>this.name=x);
  }

}

