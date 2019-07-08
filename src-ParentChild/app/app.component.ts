import { Component } from '@angular/core';
import { AddEmployeeComponent } from './app.addEmployee';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
    
})

export class AppComponent 
{
    empName:string="capgemini";
    message:string;
    getDataFromChild(msg)
    {
        this.message=msg;
    }
 }