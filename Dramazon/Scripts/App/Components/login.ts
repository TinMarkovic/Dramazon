import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {FormBuilder, Validators, ControlGroup} from 'angular2/common'




@Component({
    selector: "login-component",
    providers: [],
    directives: [],
    template: ` 
              
                    <form class="form-horizontal" [ngFormModel]="loginForm" (submit)="onLoginButton($event)">
                        <fieldset>
                            <!-- Sign In Form -->
                            <!-- Text input-->
                            <div class="control-group">
                                <label class="control-label" for="alias">Alias:</label>
                                <div class="controls">
                                    <input ngControl="alias" required="" id="alias" name="userid" type="text" class="form-control" placeholder="Someone" class="input-medium" required="">
                                </div>
                            </div>

                            <!-- Password input-->
                            <div class="control-group">
                                <label class="control-label" for="passwordinput">Password:</label>
                                <div class="controls">
                                    <input ngControl="password" required="" id="passwordinput" name="passwordinput" class="form-control" type="password" placeholder="********" class="input-medium">
                                </div>
                            </div>

                            <!-- Multiple Checkboxes (inline) -->
                            <div class="control-group">
                                <label class="control-label" for="rememberme"></label>
                                <div class="controls">
                                    <label class="checkbox-inline" for="rememberme-0">
                                        <input ngControl="rememberme" type="checkbox" name="rememberme" id="rememberme-0" value="false">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <!-- Button -->
                            <div class="control-group">
                                <label class="control-label" for="signin"></label>
                                <div class="controls">
                                    <button id="signin" name="signin" class="btn btn-success" type="submit">Sign In</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
              `
})

export class LoginComponent {
    loginForm: ControlGroup;

    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            alias: ["", Validators.required],
            password: ["", Validators.required],
            rememberme: [false]
        });
    }
    
    onLoginButton(event) {
        alert(JSON.stringify(this.loginForm.value));
    }


}