import {Component} from "angular2/core"
import {bootstrap}    from 'angular2/platform/browser'

import {TodoItem} from "./Model/TodoItem"
import {TodoInput} from "./Components/TodoInput"
import {TodoProgress} from "./Components/TodoProgress"
import {TodoList} from "./Components/TodoList"
import {TodoService} from "./Services/TodoService"

import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: "todo-app",
    providers: [TodoService],
    directives: [TodoInput, TodoProgress, TodoList],
    template: ` 
                <todo-progress [todos]="todoService.todos"></todo-progress>    
                <todo-input (added)="onTodoAdded($event)"></todo-input>

                <todo-list [todos]="todoService.todos" (remove)="removeTodoItem($event)" (todoitemvaluechanged)="handleTodoItemValueChanged($event)" (todoitemdonechanged)="handleTodoItemDoneChanged($event)"></todo-list>
                
                <div class="well todo-toolbar">    
                    <button type="button" class="btn btn-primary" (click)="onCompleteAll()"><span class="glyphicon glyphicon-ok-circle"></span> Check all</button> 
                    <button type="button" class="btn btn-danger" (click)="onUncheckAll()"><span class="glyphicon glyphicon-remove-circle"></span>  Uncheck all</button>
                    <button type="button" class="btn btn-success pull-right" (click)="onRemoveDone()"><span class="glyphicon glyphicon-ban-circle"></span> Remove done</button>
                </div>
                `
})
export class Dramazon {
    private todoService: TodoService;

    //Dependency Injection!
    constructor(todoService: TodoService){
        this.todoService = todoService;
    }    

    public onCheckboxChange(checkbox: HTMLInputElement, todoItem: TodoItem){
        todoItem.done = checkbox.checked;
    }

    private onTodoAdded(value: string){
        this.todoService.addTodo(value);
    }

    private onCompleteAll():void{
        this.todoService.completeAll();
    }

    private onUncheckAll():void{
        this.todoService.resetAll();
    }

    private onRemoveDone():void{
        this.todoService.removeDone();
    }

    private removeTodoItem(todoItem: TodoItem){
        this.todoService.removeTodo(todoItem);
    }

    private handleTodoItemValueChanged(event){
        this.todoService.updateTodoValue(event.todoItem, event.value);
    }
    
    private handleTodoItemDoneChanged(event){
        this.todoService.updateTodoDone(event.todoItem, event.done);
    }
}

bootstrap(Dramazon, [ROUTER_PROVIDERS, HTTP_PROVIDERS, TodoService]);
