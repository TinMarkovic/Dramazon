import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
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


    constructor(public http: Http, fb: FormBuilder) {
        this.loginForm = fb.group({
            alias: ["", Validators.required],
            password: ["", Validators.required],
            rememberme: [false]
        });
    }

    private onRegButton() {

    }
    private onLoginButton(event) {
        var objectToSend = JSON.stringify(this.loginForm.value);

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:64347/api/Login', objectToSend, { headers: headers })
            .subscribe(res => {
                var data = JSON.parse(res.json());
                console.log(data);
                console.log("~~~~~~~~");
                console.log(data.Value);
                localStorage.setItem("dramazonToken", data.Value);
                localStorage.setItem("dramazonAlias", data.User.Alias);

                console.log("Local storage:", localStorage.getItem("dramazonToken"));
                location.reload();
            });

        event.preventDefault();
    }


}