import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: "cart-component",
    providers: [],
    directives: [],
    template: ` 
              
              `
})

export class CartComponent {

}

bootstrap(CartComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
