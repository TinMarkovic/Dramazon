import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {FormBuilder, Validators, ControlGroup} from 'angular2/common'




@Component({
    selector: "register-component",
    providers: [],
    directives: [],
    template: ` 
              <form class="form-horizontal" [ngFormModel]="registerForm" (submit)="onRegButton($event)">
                    <fieldset>
                        <!-- Sign Up Form -->
                        <!-- Text input-->
                        <div class="control-group">
                            <label class="control-label" for="email">Email:</label>
                            <div class="controls">
                                <input id="email" ngControl="email" name="email" class="form-control" type="text" placeholder="Someone@Smplace.com" class="input-large" required="">
                            </div>
                        </div>

                        <!-- Text input-->
                        <div class="control-group">
                            <label class="control-label" for="alias">Alias:</label>
                            <div class="controls">
                                <input id="alias" ngControl="alias" name="alias" class="form-control" type="text" placeholder="Username" class="input-large" required="">
                            </div>
                        </div>

                        <!-- Password input-->
                        <div class="control-group">
                            <label class="control-label" for="password">Password:</label>
                            <div class="controls">
                                <input id="password" ngControl="password" name="password" class="form-control" type="password" placeholder="********" class="input-large" required="">
                                <em>6+ characters</em>
                            </div>
                        </div>

                        <!-- Text input-->
                        <div class="control-group">
                            <label class="control-label" for="reenterpassword">Re-Enter Password:</label>
                            <div class="controls">
                                <input id="reenterpassword" ngControl="reenterpassword" class="form-control" name="reenterpassword" type="password" placeholder="********" class="input-large" required="">
                            </div>
                        </div>

                        <!-- Button -->
                            <div class="control-group">
                                <label class="control-label" for="register"></label>
                                <div class="controls">
                                    <button id="register" name="register" class="btn btn-success" type="submit">Register</button>
                                </div>
                            </div>
                    </fieldset>
                </form>
              `
})

export class RegisterComponent {
    registerForm: ControlGroup;

    constructor(public http: Http, fb: FormBuilder) {
        this.registerForm = fb.group({
            email: ["", Validators.required],
            alias: ["", Validators.required],
            password: ["", Validators.required],
            reenterpassword: ["", Validators.required]
        });
    }


    onRegButton(event) {
        if (!(this.registerForm.value["password"] == this.registerForm.value["reenterpassword"])) {
            alert("Your two passwords do not match...");
            return;
        }
        var objectToSend = JSON.stringify(this.registerForm.value);
        console.log(objectToSend);

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:64347/api/Register', objectToSend, { headers: headers })
            .subscribe(res => {
                var response = JSON.parse(res.json());
                if (response.success == false) {
                    alert(response.message);
                } else {
                    //TODO login user in
                    location.reload();
                }
                
            });
    }


}