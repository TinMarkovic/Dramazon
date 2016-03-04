import {Component} from "angular2/core"
import {NgClass, NgIf, NgStyle} from "angular2/common"

import {TodoItem} from "./../Model/TodoItem"

@Component({
    selector:"todo-progress",
    inputs: ['todos'],
    directives: [NgClass, NgStyle, NgIf],
    template:
    `<div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" [ngStyle]="{width: getSolvedTodosPercentage() | percent}" [ngClass]="{complete: isComplete()}">
                {{getSolvedTodosPercentage() | percent:'1.0-2'}}
            </div>
        </div>

        <div class="status-container">
            <label>Status:</label>
            
            <span *ngIf="getSolvedTodosCount() == 0">We haven't even started!</span>
            <span *ngIf="getSolvedTodosCount() == todos.length && todos.length != 0">Done!</span>
            <span *ngIf="getSolvedTodosCount() > 0 && getSolvedTodosCount() < todos.length">In progress</span>
            <span>({{getRemainingTodosCount()}} remaining)</span>
        </div>
    </div>`
})
export class TodoProgress{
    public todos: TodoItem[];

    private getSolvedTodosCount(){
        return this.todos.filter(item=>item.done).length;
    }

    private getSolvedTodosPercentage(): number{
        return this.todos.length != 0 ? this.getSolvedTodosCount()/this.todos.length 
                                      : 0;
    }
    
    private getRemainingTodosCount(){
        return this.todos.filter(item=>!item.done).length;
    }

    private isComplete(){
        return this.todos.length != 0
            && this.getSolvedTodosCount() == this.todos.length;
    }
}

