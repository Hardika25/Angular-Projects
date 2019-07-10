
import {Component,OnInit} from '@angular/core';
import { EmployeeService } from './app.employeeservice';
@Component({
   selector:'add-comp',
   templateUrl:'addemployee.html'

})
export class AddEmployeeComponent implements OnInit
{
 
   constructor(private service:EmployeeService){}
   empAll:any[]=[];
   ngOnInit()
   {
      this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);
   }
   deleteemployee(i:number):any
   {
      this.empAll.splice(i,1);
      alert("Are you sure you want to delete");
   }
   
}