import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MailComponent } from './mail/mail.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { ComposeComponent } from './compose/compose.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormelementsComponent } from './formelements/formelements.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { FormImageCropComponent } from './form-image-crop/form-image-crop.component';
import { FormImgZoomComponent } from './form-img-zoom/form-img-zoom.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    MailComponent,
    ForgotPasswordComponent,
    LockScreenComponent,
    ViewMessageComponent,
    ComposeComponent,
    HeaderComponent,
    SidebarComponent,
    FormelementsComponent,
    FileuploadComponent,
    FormImageCropComponent,
    FormImgZoomComponent,
    AllBlogsComponent,
    TestimonialsComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
