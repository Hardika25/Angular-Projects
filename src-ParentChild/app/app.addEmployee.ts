
import {Component,Input,EventEmitter, Output} from '@angular/core';


@Component({
   selector:'add-comp',
   templateUrl:'addemployee.html'
                 

})
export class AddEmployeeComponent
{
   @Input() //for passing the data from parent to child
   inchild:string;

   @Output()   //from child to parent
   notify:EventEmitter<string> =new EventEmitter<string>();

   callingParent():any
   {
      this.notify.emit("From child data send");
   }
}