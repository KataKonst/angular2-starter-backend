import { Component, ViewEncapsulation } from '@angular/core';



@Component({
    selector: 'app',
    templateUrl: 'gustavo-angular2/main.html'
})
export class Application {

    public name : String = null;

    public handleClick() : void {
        this.name = "Ksty";
    }

}

