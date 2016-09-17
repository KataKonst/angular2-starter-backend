import {
    bootstrap, provide,
    Component,NgIf
} from 'angular2/angular2';
import {APP_BASE_HREF,ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'app',
    templateUrl: 'gustavo-angular2/main.html',
    directives: [NgIf]
})
export class Application {

    public name : String = null;

    public handleClick() : void {
        this.name = "Ksty";
    }

}

bootstrap(Application,[
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,provide(APP_BASE_HREF,{useValue:'/app/root'})
]);
