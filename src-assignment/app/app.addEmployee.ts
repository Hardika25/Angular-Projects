import { Component } from '@angular/core';

@Component({
    selector: 'add-emp',
    templateUrl: 'app.addemp.html'
})

export class AddEmployeeComponent {

    empId:number;
    empName:string;
    empSal:number;
    empDep:string;
   
    index:number=null;
    status:boolean=false;

    empAll:any[]=
    [
    {empId:1001,empName:"Rahul",empSal:9000,empDep:"Java"},
    {empId:1002,empName:"Sachin",empSal:19000,empDep:"OraApps"},
    {empId:1003,empName:"Vikash",empSal:29000,empDep:"BI"},
    ];

    addEmployee():any{
        this.empAll.push({empId:this.empId,empName:this.empName,empSal:this.empSal,empDep:this.empDep});
        console.log("Employee Added....."+this.empAll);
        this.empSal=null;
        this.empDep=null;
        this.empName=null;
        this.empId=null;
        this.status = true;
    }



 }