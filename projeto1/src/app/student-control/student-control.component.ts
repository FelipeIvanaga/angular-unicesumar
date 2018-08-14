import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-control',
  templateUrl: './student-control.component.html',
  styleUrls: ['./student-control.component.css']
})
export class StudentControlComponent implements OnInit {

  student_ra: string;
  student_nome: string;
  student_email: string;
  listStudent: Array<any>;

  constructor() { 
    this.listStudent = new Array<any>();
  }

  ngOnInit() {
  }

  onSubmit(){
    this.listStudent.push({
      ra:this.student_ra,
      nome:this.student_nome,
      email:this.student_email
    });
  }
}
