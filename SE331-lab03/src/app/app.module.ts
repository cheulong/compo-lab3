import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StudentsComponent} from './students/students.component';
import {TimeComponent} from './time/time.component';
import {FormsModule} from '@angular/forms';
import {StudentDataService} from './services/students-data.service';
import {StudentData2Service} from './services/students-data2.service';
import {HttpModule} from '@angular/http';
import{StudentDataFileService} from './services/students-data-file.service';
import{PeopleStudentDataFileService} from './services/people-students-file.service';
@NgModule({
 declarations: [ AppComponent,
				StudentsComponent,
				TimeComponent],
 imports: [BrowserModule,FormsModule,HttpModule],
 bootstrap: [AppComponent],
 // providers:[{provide:StudentDataService,useClass:StudentData2Service}]
 providers: [StudentDataFileService,PeopleStudentDataFileService]
})
export class AppModule {}
