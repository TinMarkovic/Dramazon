import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: "register-component",
    providers: [],
    directives: [],
    template: ` 
              <form class="form-horizontal">
                    <fieldset>
                        <!-- Sign Up Form -->
                        <!-- Text input-->
                        <div class="control-group">
                            <label class="control-label" for="Email">Email:</label>
                            <div class="controls">
                                <input id="Email" name="Email" class="form-control" type="text" placeholder="JoeSixpack@sixpacksrus.com" class="input-large" required="">
                            </div>
                        </div>

                        <!-- Text input-->
                        <div class="control-group">
                            <label class="control-label" for="userid">Alias:</label>
                            <div class="controls">
                                <input id="userid" name="userid" class="form-control" type="text" placeholder="Username" class="input-large" required="">
                            </div>
                        </div>

                        <!-- Password input-->
                        <div class="control-group">
                            <label class="control-label" for="password">Password:</label>
                            <div class="controls">
                                <input id="password" name="password" class="form-control" type="password" placeholder="********" class="input-large" required="">
                                <em>6+ characters</em>
                            </div>
                        </div>

                        <!-- Text input-->
                        <div class="control-group">
                            <label class="control-label" for="reenterpassword">Re-Enter Password:</label>
                            <div class="controls">
                                <input id="reenterpassword" class="form-control" name="reenterpassword" type="password" placeholder="********" class="input-large" required="">
                            </div>
                        </div>

                        <!-- Multiple Radios (inline) -->
                        <br>
                        <div class="control-group">
                            <label class="control-label" for="humancheck">Humanity Check:</label>
                            <div class="controls">
                                <label class="radio-inline" for="humancheck-0">
                                    <input type="radio" name="humancheck" id="humancheck-0" value="robot" checked="checked">I'm a Robot
                                </label>
                                <label class="radio-inline" for="humancheck-1">
                                    <input type="radio" name="humancheck" id="humancheck-1" value="human">I'm Human
                                </label>
                            </div>
                        </div>

                        <!-- Button -->
                        <div class="control-group">
                            <label class="control-label" for="confirmsignup"></label>
                            <div class="controls">
                                <button id="confirmsignup" name="confirmsignup" class="btn btn-success">Sign Up</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
              `
})

export class RegisterComponent {


    private onRegButton() {

    }
    private onLoginButton(event) {
        alert("dan ga jebo");
    }


}