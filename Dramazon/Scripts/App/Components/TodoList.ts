import {Component, EventEmitter} from "angular2/core";
import {NgFor} from 'angular2/common';

import {TodoItem as TodoItemModel} from "./../Model/TodoItem"
import {TodoItem} from "./TodoItem"

import {ContainsPipe} from "./../Pipes/ContainsPipe"
import {DisplayOptions} from "./../Enums/DisplayOptions"

@Component({
    selector: "todo-list",
    inputs:["todos"],
    outputs: ["remove", "todoitemvaluechanged", "todoitemdonechanged"],
    directives: [NgFor, TodoItem],
    pipes: [ContainsPipe],
    template:
    `<div>
        <ul class="list-group">
            <li class="list-group-item">
                <input type="text" class="form-control todo-search" placeholder="Search" [value]="searchKey" #search (keyup)="updateSearchKey(search)">
                <span class="input-group-btn done-select">
                    <select class="form-control" #select (change)="onSelectChange(select)">
                        <option selected value="all">All</option>
                        <option value="done">Done</option>
                        <option value="notDone">Not done</option>
                    </select>
                </span>
            </li>
            <li class="list-group-item" *ngFor="#todo of todos | contains:displayOptions:searchKey">
                <todo-item [todo]="todo" (removed)="onTodoRemoved($event)" (donechanged)="onTodoItemDoneChanged($event)" (valuechanged)="onTodoItemValueChanged($event)"></todo-item>
            </li>
        </ul>
    </div>
    `
})
export class TodoList{
    public todos: TodoItemModel[];
    
    private searchKey: string = "";
    private displayOptions: DisplayOptions;

    public remove: EventEmitter<TodoItemModel>;
    public todoitemvaluechanged: EventEmitter<{todoItem:TodoItemModel, value:string}>;
    public todoitemdonechanged: EventEmitter<{todoItem:TodoItemModel, done:boolean}>;

    constructor(){
        this.searchKey = "";
        this.displayOptions = DisplayOptions.All;
        
        this.remove = new EventEmitter();
        this.todoitemvaluechanged = new EventEmitter();
        this.todoitemdonechanged = new EventEmitter();
    }

    private onTodoRemoved(todo: TodoItemModel):void{
        this.remove.next(todo);
    }

    private onTodoItemDoneChanged(event): void {
        this.todoitemdonechanged.next(event);
    }

    private onTodoItemValueChanged(event): void {
        this.todoitemvaluechanged.next(event);
    }

    private updateSearchKey(input: HTMLInputElement): void {
        this.searchKey = input.value;
        console.log(this.searchKey);
    }

    private onSelectChange(select: HTMLSelectElement){
        switch(select.value){
            case "all": 
                this.displayOptions = DisplayOptions.All; 
                break;
            case "done":
                this.displayOptions = DisplayOptions.Done; 
                break;
            case "notDone":
                this.displayOptions = DisplayOptions.NotDone; 
                break;
        }        
    }
}