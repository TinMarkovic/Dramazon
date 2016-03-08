import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {SignUpComponent} from "./signup";

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: "user-dropdown",
    providers: [],
    directives: [SignUpComponent],
    template: ` 
              
              `
})

export class UserDropdownComponent {

}