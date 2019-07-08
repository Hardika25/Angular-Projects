
import {Component} from '@angular/core';
@Component({
   selector:'add-emp',
   templateUrl:'app.add.html'
   /*template:`Employee Id is {{empId}}<br/>,
             Employee Name is {{empName}}<br/>,
             Employee Salary is {{empSalary}}<br/>`*/
})
export class AddEmployeeComponent
{
   empId:number=1001;
   empName:string="asd";
   empSalary:number=90000;

   addEmployee():any
   {
      alert("Employee Added....");
   }

}