import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Student} from '../students/student';
import 'rxjs/add/operator/map';
@Injectable()
export class PeopleStudentDataFileService {
constructor(private http: Http){}
getPeopleData(){
return this.http.get('app/data/people.json')
.map(res => res.json().students);
}
}