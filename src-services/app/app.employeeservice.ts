import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';


@Injectable
({
    providedIn:'root'
})
export class EmployeeService
{

        constructor(private http:HttpClient){} //used to get data from jason
        getAllEmployee()
        {
           return this.http.get("assets/employee.json");
            // this.http.get("http://192.33.44/get"); write url if the data is passed through the url
        }


} 