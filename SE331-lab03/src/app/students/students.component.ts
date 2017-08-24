import {Component} from '@angular/core';
import {Student} from './student';
// import {STUDENTS} from '../mocks'
import { Observable } from 'rxjs/Observable';
import { StudentDataService} from'../services/students-data.service';
import {Injectable} from '@angular/core';
import {StudentDataFileService} from '../services/students-data-file.service';
import {PeopleStudentDataFileService} from '../services/people-students-file.service';
@Injectable()
@Component({
  selector: 'students',
  templateUrl: 'app/students/students.component.html',
  styleUrls: ['app/students/students.component.css']

})
export class StudentsComponent {
  students:Observable<Student[]>;

  // constructor(private studentDataService:StudentDataService ){}
  constructor(private studentDataService:StudentDataFileService,private peopleStudentDataService:PeopleStudentDataFileService ){}
  penAmount:number;
  ngOnInit(){
    // this.students = STUDENTS;
    // let studentDataService=new StudentDataService();
    // this.students=studentDataService.getStudentsData();
    // this.students = this.studentDataService.getStudentsData();
    //  this.students=this.studentDataService.getStudentsData();
    this.studentDataService.getStudentsData()
    .subscribe(data => this.students = data,
      error => alert("Error is : " + error),
      ()=>console.log("finished")
      );

    // this.peopleStudentDataService.getPeopleData()
    // .subscribe(data => this.students = data,
    //   error => alert("Error is : " + error),
    //   ()=>console.log("finished")
    //   );


  }

  averageGpa() {
    let sum = 0;
    // for (let student of this.students) {
      //   sum += student.gpa;
      // }
      // return sum / this.students.length;
      if (Array.isArray(this.students)){
        for(let student of this.students){
          sum += student.gpa;
        }
        return sum/this.students.length;
      }else{
        return 0.0;
      }
    }
      upQuantity(student:Student){
        // alert("You called upQuantity");
        student.penAmount++;
      }
      downQuantity(student:Student){
        if(student.penAmount>0){
          student.penAmount--;
        }else {
          student.penAmount=0;
        }


      }
      reset(student:Student){
        student.penAmount=0;
      }
      getCoord(event:any){
        console.log(event.clientX + ", " + event.clientY);
      }
    }
