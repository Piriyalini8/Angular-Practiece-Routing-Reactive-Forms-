import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  firstName=new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    alert(this.firstName.value)
  }

}
