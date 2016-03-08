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
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login now! <span class="caret"></span></button>
                <ul class="dropdown-menu">
                    <li>
                        <button class="btn btn-primary btn-sm center-block" href="#signup" data-toggle="modal" data-target=".bs-modal-sm">Sign In/Register</button>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
              `
})

export class UserDropdownComponent {

}