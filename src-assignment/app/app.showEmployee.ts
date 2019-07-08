import { Component, Input } from "@angular/core";

@Component({
    selector:'show',
    templateUrl:'app.showEmployee.html'
})
export class showEmployee{
    @Input()
    inchild:any[];
}