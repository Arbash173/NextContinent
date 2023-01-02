import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { ComposeComponent } from './compose/compose.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormImageCropComponent } from './form-image-crop/form-image-crop.component';
import { FormImgZoomComponent } from './form-img-zoom/form-img-zoom.component';
import { FormelementsComponent } from './formelements/formelements.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ViewMessageComponent } from './view-message/view-message.component';

const routes: Routes = [
  {path:'', component:DasboardComponent},
  {path:'dashboard',component:DasboardComponent},
  {path:'profile', component:ProfileComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'lock-screen',component:LockScreenComponent},
  {path:'inbox', component:MailComponent},
  {path:'compose-message',component:ComposeComponent},
  {path:'view-message',component:ViewMessageComponent},
  {path:'form-elements',component:FormelementsComponent},
  {path:'form-upload',component:FileuploadComponent},
  {path:'form-image-crop', component:FormImageCropComponent},
  {path:'form-image-zoom', component:FormImgZoomComponent},
  {path:'allblogs', component:AllBlogsComponent},
  {path:'alltestimonials', component:TestimonialsComponent},
  {path:'allemployees', component:EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
