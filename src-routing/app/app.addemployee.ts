import { Component } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";
import {Router} from '@angular/router'



@Component
({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent
{
    constructor(private service:EmployeeService,private router:Router){}
    
    myallData:any;
    empName:string;
    empSalary:number;
    empId:number;
    empDepartment:string;

    addData()
    {
        this.myallData={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}
        if(this.service.addEmployee(this.myallData))
        {
            this.router.navigate(['show']);
        }
    }
}