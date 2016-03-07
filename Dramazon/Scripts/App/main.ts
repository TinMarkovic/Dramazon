import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {SignUpComponent} from "./Components/signup";
import {SearchBarComponent} from "./Components/searchBar";
import {CartComponent} from "./Components/cart";

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: "main-app",
    providers: [],
    directives: [SignUpComponent, SearchBarComponent, CartComponent],
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
                    </div>

                    <div class="col-lg-4 small-margin-top">
                        <!-- Cart -->
                        <button type="button" class="btn btn-default"> Your cart <span class="glyphicon glyphicon-shopping-cart"></span> </button>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
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
