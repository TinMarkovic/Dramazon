import {Component, EventEmitter} from "angular2/core"

@Component({
    selector: "todo-input",
    outputs: ["added"],
    template: 
    `<div class="row">
        <div class="col-xs-12">
            <div class="todo-input-group input-group input-group-lg">
                <input type="text" class="form-control" placeholder="What needs to be done?" #todoInput (keyup.enter)="onAddTodo(todoInput)">
                <span class="input-group-btn">
                    <button class="btn btn-default glyphicon glyphicon-pencil" type="button" (click)="onAddTodo(todoInput)"></button>
                </span>
            </div>
        </div>
    </div>`
})
export class TodoInput {
    public added: EventEmitter<String>;

    constructor(){
        this.added = new EventEmitter();
    }

    private onAddTodo(todoInput: HTMLInputElement): void {
        var value = todoInput.value.trim();
        if(value == "") { return; }
        
        this.added.next(value);        
        
        todoInput.value = "";
    }
}