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

           
            <div class="container">
               <img class="main-image" src="/Content/Image/image.jpg">
             <!-- IN CONSTRUCTION | issue: slike se ne prikazuju dan ih  Ova slika je na hlađenju jer je naporna -->

                <div class="col-lg-3 temp-css mainpage-boxpadd">
                    <div class="mainpage-box">
                        <h3 class="centerBlock">Welcome, {{alias}}</h3>
                        <p class="centerBlock">sign in for the best experience, token: {{token}}</p>
                        <br><br><br><br><br>
                        <button type="button" class="btn btn-default centerBlock signin-button btn-warning">Sign in securely</button>
                
                    </div>
                </div>
                <div class="col-lg-3 temp-css mainpage-boxpadd">
                    <div class="mainpage-box">
                        <h3 class="mainbox-header">Popular departments</h3>
                        <br>
                        <div class="col-lg-6 minibox-container">
                            <img src="/Content/Image/1.png" class="img-circle" style="width: 100%;">
                            <h6>Kindle</h6>
                        </div>
                        <div class="col-lg-6 minibox-container">
                            <img src="/Content/Image/2.png" class="img-circle" style="width: 100%;">
                            <h6>Amazon video</h6>
                        </div>
                        <div class="col-lg-6 minibox-container">
                            <img src="/Content/Image/3.png" class="img-circle" style="width: 100%;">
                            <h6>Music</h6>
                        </div>
                        <div class="col-lg-6 minibox-container">
                            <img src="/Content/Image/4.png" class="img-circle" style="width: 100%;">
                            <h6>Kindle</h6>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 temp-css mainpage-boxpadd">
                    <div class="mainpage-box">
                        <h3 class="mainbox-header">The dress shop</h3>
                        <br>
                        <img src="/Content/Image/5.png" style="width: 210px; display: block; margin: 0 auto;">
                    </div>
                </div>
                <div class="col-lg-3 temp-css mainpage-boxpadd">
                    <div class="mainpage-box">
                        <h3 class="mainbox-header">Deal of the day</h3>
                        <br>
                        <div class="minibox-container">
                            <h2>$214.99</h2>
                            <h6>List <s>$269.99</s> (20% off)</h6>
                            <img src="/Content/Image/6.jpg" style="width: 100px;">
                        </div>
                    </div>
                </div>
            </div>
            <!-- IN CONSTRUCTION | issue: slike se ne prikazuju dan ih | To ti je zato jer si mladi noob neiskusni <3 -->
          `
})

export class MainApp {
    alias: string;
    token: string;

    constructor() {
        if (localStorage.getItem("dramazonToken") != null) {
            this.alias = localStorage.getItem("dramazonAlias");
            this.token = localStorage.getItem("dramazonToken");
        }
        else {
            this.alias = "Stranger";
        }
    }
}

bootstrap(MainApp, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
