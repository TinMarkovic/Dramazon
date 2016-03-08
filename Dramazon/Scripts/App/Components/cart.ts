import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: "cart-component",
    providers: [],
    directives: [],
    template: ` 
              <button type="button" class="btn btn-default"> Your cart <span class="glyphicon glyphicon-shopping-cart"></span> </button>
              `
})

export class CartComponent {

}