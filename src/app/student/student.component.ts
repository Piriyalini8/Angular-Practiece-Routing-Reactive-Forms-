import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  profileName =new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    // alert("success")
  }

}
