import {Pipe} from "angular2/core"
import {TodoItem} from "./../Model/TodoItem"
import {DisplayOptions} from "./../Enums/DisplayOptions"

@Pipe({
    name: "contains",
    pure: false
})
export class ContainsPipe{
    transform(items: TodoItem[], [displayOption, keyword]) {
        if(displayOption != null && displayOption != DisplayOptions.All){
            items = items.filter(item => {
                return displayOption == DisplayOptions.Done ? item.done : !item.done;
            });
        }
        if(keyword == null || keyword.trim() == "") { return items; }

        keyword = keyword.toLowerCase();

        return items.filter(item => item.value.toLowerCase().indexOf(keyword) != -1);
    }
}