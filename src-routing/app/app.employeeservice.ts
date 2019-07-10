import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class EmployeeService
{
    constructor(private http:HttpClient){}
    empAll:any[]=[{empId:1001,empName:"er",empSalary:2344,empDepartment:"bi"},
                  {empId:1002,empName:"har",empSalary:234,empDepartment:"java"},
                  {empId:1003,empName:"ekjadhg",empSalary:89000,empDepartment:".net"}
];
    getEmployee()
    {
        //return this.http.get("assets/employee.json");
        return this.empAll;
    }
    addEmployee(data:any)
    {
        this.empAll.push(data);
        return true;
    }
   
}