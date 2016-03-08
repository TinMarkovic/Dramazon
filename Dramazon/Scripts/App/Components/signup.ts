import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {LoginComponent} from "./login";
import {RegisterComponent} from "./register";

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: "signup-component",
    providers: [],
    directives: [LoginComponent, RegisterComponent],
    template: ` 
              <link rel="stylesheet" type="text/css" href="/Content/style.css">
                <div class="modal fade bs-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="bs-example bs-example-tabs">
                        <ul id="myTab" class="nav nav-tabs">
                          <li class="active"><a href="#signin" data-toggle="tab">Sign In</a></li>
                          <li class=""><a href="#signup" data-toggle="tab">Register</a></li>
                        </ul>
                      </div>
                      <div class="modal-body">
                        <div id="myTabContent" class="tab-content clearfix">
                            <div class="tab-pane fade active in" id="signin">
                                <login-component></login-component>
                            </div>
                            <div class="tab-pane fade" id="signup">
                                <register-component></register-component>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <center>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      </center>
                    </div>
                  </div>
                </div>
              `
})

export class SignUpComponent {


    private onRegButton() {
    
    }
    private onLoginButton(event) {
        alert("dan ga jebo");
    }

    
}