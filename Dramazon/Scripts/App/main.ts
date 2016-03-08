import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {SignUpComponent} from "./Components/signup";
import {SearchBarComponent} from "./Components/searchBar";
import {CartComponent} from "./Components/cart";
import {UserDropdownComponent} from "./Components/userdropdown";

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: "main-app",
    providers: [],
    directives: [SignUpComponent, SearchBarComponent, CartComponent, UserDropdownComponent],
    template: ` 
                <div class="navbar navbar-inverse navbar-fixed-top">
                <!-- Empty space left -->
                <div class="col-lg-1">
                </div>

                <!-- Logo and homepage link -->
                <div class="col-lg-1">
                    <a>
                        <img src="/Content/Image/Dramazon.png" alt="dramazon" height="35" class="navbar-brand">
                    </a>
                </div>

                <!-- Main search bar -->
                <searchBar-component></searchBar-component>

                <!-- Login and cart buttons -->
                <div class="col-lg-4">
                    <div class="col-lg-4 small-margin-top">
                        <!-- Login -->
                        <user-dropdown></user-dropdown>
                    </div>

                    <div class="col-lg-4 small-margin-top">
                        <!-- Cart -->
                        <cart-component></cart-component>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <signup-component></signup-component>
          `
})

export class MainApp {

}

bootstrap(MainApp, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
