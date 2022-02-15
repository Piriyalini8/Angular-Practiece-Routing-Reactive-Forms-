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
    lastName : new FormControl(''),
    emailPassword: new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    }),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  })
  
  gender= new FormControl('')
  checkBox=new FormControl([])

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.profileName.value,this.gender.value)
  }

}
