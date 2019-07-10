import {Component,OnInit} from '@angular/core';
import { EmployeeService } from './app.employeeservice';


@Component(
{
    selector:'search-comp',
    templateUrl:'searchemployee.html'
})

export class SearchEmployeeComponent implements OnInit{
    ngOnInit(): void {
        this.empall=this.service.getEmployee();
    }

constructor (private service:EmployeeService){}

 empall:any[]=[];
searchData:any[]=[];
empName:string;
empSalary:number;
empId:number;
empDepartment:string;
// ngOninit()
// {
    
// }

searchEmployee(id)
{
   // alert("search found")
    this.empId=parseInt(id);
    this.searchData=this.empall.filter(o=>o.empId===this.empId);
   

}
}
