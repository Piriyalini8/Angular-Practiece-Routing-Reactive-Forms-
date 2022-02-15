import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullTimeJobComponent } from './full-time-job/full-time-job.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PartTimeJobComponent } from './part-time-job/part-time-job.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LoginComponent } from './user-auth/login/login.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"student",
    component:StudentComponent
  },
  {
    path:"teacher",
    component:TeacherComponent,
    children:[
      {
        path:"full_time",
        component:FullTimeJobComponent
      },
      {
        path:"part_time",
        component:PartTimeJobComponent
      }
    ]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
