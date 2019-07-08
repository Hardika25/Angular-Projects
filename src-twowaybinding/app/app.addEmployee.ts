
import {Component} from '@angular/core';
import { IEmployee } from './Employee';
@Component({
   selector:'add-emp',
   templateUrl:'app.add.html'
   /*template:`Employee Id is {{empId}}<br/>,
             Employee Name is {{empName}}<br/>,
             Employee Salary is {{empSalary}}<br/>`*/
})
export class AddEmployeeComponent
{



   empId:number;
   empName:string;
   empSalary:number;
   empall:any[]=[
      {empId:1001,empName:"hardika",empSalary:90000},
      {empId:1002,empName:"hi",empSalary:980000},
      {empId:1003,empName:"hello",empSalary:34000}
  

   ];
   
   addEmployee():any
   {

      this.empall.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})
  
       console.log("Employee Added...."+this.empId+ " "+this.empName+ " " +this.empSalary);

   }
   deleteEmployee(data:number):any
   {
       this.empall.splice(data,1);
   }
   UpdateEmployee(data:number):any
   {
      this.empall.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})
  
      alert("Updated..."+data);
   }

}