import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit() {
    this.profileName=this.fb.group({
      firstName:['Hello',[Validators.required,Validators.minLength(5)]],
      lastName:['',[Validators.required,Validators.minLength(3)]],
      courcesList:this.fb.array([]),
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
      
    });
  }
  get courcesArray() : FormArray{
    return this.profileName.controls["courcesList"] as FormArray;
  }
  checking1:string='f';

  change(){
    if(this.checking1=='y')
    this.checking1='f'
    if(this.checking1=='f')
    this.checking1='y'
  }
  onSubmit(){
    if(this.checking1=='y')
    this.checking1='f'
    console.log(this.profileName.value)
  }
  addNew(){
    const courseFormGroup = this.fb.group({
      name:[''],
      duration:['']
    });
    this.courcesArray.push(courseFormGroup);
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
