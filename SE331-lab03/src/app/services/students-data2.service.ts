import {STUDENTS2} from '../mocks';
import {Injectable} from '@angular/core';
@Injectable()
export class StudentData2Service {
	getStudentsData(){
		return STUDENTS2;
	}
}