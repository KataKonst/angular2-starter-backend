import { Component, ViewEncapsulation } from '@angular/core';
import {NgIf} from '@angular/common';
import {WikipediaService} from "./services/DataService";

@Component({
  selector: 'app',
  templateUrl: 'no-content/main.html'
})
export class App {

  public name : String = null;
  constructor(private wikipediaService: WikipediaService) {}
  public handleClick() : void {
    this.wikipediaService.search("dfdsf").subscribe(x=>this.name=x);
  }

}

