import {Component, View, EventEmitter} from "angular2/core"
import {NgClass, NgIf} from 'angular2/common';

import {TodoItem as TodoItemModel} from "./../Model/TodoItem"

@Component({
    selector:"todo-item",
    inputs: ["todo"],
    outputs: ["removed", "valuechanged", "donechanged"],
    directives: [NgClass, NgIf],
    template:
    `
    <div>
        <input class="todo-checkbox" #todoCheckbox type="checkbox" [checked]="todo.done" (change)="onCheckboxChange(todoCheckbox)"/>
        <input #todoInput *ngIf="isEdit" type="text" [value]="todo.value" (keyup.enter)="leaveEditMode(todoInput, true)" (keyup.esc)="leaveEditMode(todoInput, false)" (blur)="leaveEditMode(todoInput, false)" autofocus/>
        <span *ngIf="!isEdit" [ngClass]="todo.getStatusText()" (dblclick)="enterEditMode()">{{todo.value}}</span>
        <span class="glyphicon glyphicon-remove remove-todo" (click)="onRemoveTodo()"></span>
    </div>
    `
})
export class TodoItem {
    public todo: TodoItemModel;
    
    public removed: EventEmitter<TodoItem>;
    public valuechanged: EventEmitter<{todoItem:TodoItem, value:string}>;
    public donechanged: EventEmitter<{todoItem:TodoItem, done:boolean}>;

    private isEdit: boolean;

    constructor(){
        this.removed = new EventEmitter();
        this.valuechanged = new EventEmitter();
        this.donechanged = new EventEmitter();
        
        this.isEdit = false;
    }

    private onRemoveTodo(): void {
        this.removed.next(this.todo);
    }

    private onCheckboxChange(checkbox: HTMLInputElement): void{
        this.donechanged.next({
            todoItem: this.todo, 
            done: checkbox.checked
        });
    }

    private enterEditMode(){
        this.isEdit = true;
    }

    private leaveEditMode(inputElement: HTMLInputElement, save: boolean){
        this.isEdit = false;

        if(save){
            this.valuechanged.next({
                todoItem: this.todo, 
                value: inputElement.value.trim()
            });
        }
    }
}