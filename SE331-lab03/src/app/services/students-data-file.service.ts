import {Injectable} from '@angular/core';
import {StudentDataService} from './students-data.service';
import {Http} from '@angular/http';
import {Student} from '../students/student';
import 'rxjs/add/operator/map';
@Injectable()
export class StudentDataFileService {
constructor(private http: Http){}
getStudentsData(){
return this.http.get('app/data/student.json')
.map(res => res.json().data);
}
}