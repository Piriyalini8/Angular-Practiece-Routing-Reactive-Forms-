import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // profileName =new FormGroup({
  //   firstName : new FormControl('',[Validators.required,Validators.minLength(5)]),
  //   lastName : new FormControl('',[Validators.required,Validators.minLength(3)]),
  //   emailPassword: new FormGroup({
  //     email: new FormControl(''),
  //     password: new FormControl('')
  //   }),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   }),
  //   gender: new FormControl('')
  // })

  profileName!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileName=this.fb.group({
      firstName:['Hello',[Validators.required,Validators.minLength(5)]],
      lastName:['',[Validators.required,Validators.minLength(3)]],
      emailPassword:this.fb.group({
        email:[''],
        password:['']
      }),
      address:this.fb.group({
        city:[''],
        state:[''],
        zip:['']
      }),
      gender:['']
    })
  }
  onSubmit(){
    console.log(this.profileName.value)
  }
  setData(){
    // this.profileName.setValue({
    //   firstName:'Priyalini',
    //   lastName:'Niththiyanantham',
    //   emailPassword:{
    //     email:'priya@gmail.com',
    //     password:'password'
    //   },
    //   address:{
    //     city:'Batticaloa',
    //     state:'opt1',
    //     zip:'30200'
    //   },
    //   gender:'female'
    // })

    this.profileName.patchValue({
      firstName:'Priyalini',
      lastName:'Niththiyanantham'
    })
  }

}
