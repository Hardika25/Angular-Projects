import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddEmployeeComponent} from './app.addEmployee';
//import { ShowEmployeeComponent} from './app.showemployee';
@NgModule({
    imports: [
        BrowserModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]

})

export class AppModule { }