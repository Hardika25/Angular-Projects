import {Component,OnInit} from '@angular/core';
import { EmployeeService } from './app.employeeservice';

@Component(
{
    selector:'show-comp',
    templateUrl:'showemployee.html'
})

export class ShowEmployeeComponent implements OnInit{
constructor(private service:EmployeeService){}

empAll:any[]=[];

ngOnInit()
{
    //this.myservice.getemployee().subscribe((data:any)=>this.empAll=data)
    this.empAll=this.service.getEmployee();
}
}
