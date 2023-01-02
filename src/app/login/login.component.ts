import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalid=false;
  username : any
  pass_word : any;
  pass:any='';
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  //  localStorage.removeItem('pass')   
  }

 myForm = new FormGroup({
 userName : new FormControl(null,[Validators.required, Validators.maxLength(5)]),
 password : new FormControl(null, [Validators.required, Validators.maxLength(5)] )

 })
  

  checkuser(){
   this.username = this.myForm.value['userName']
   this.pass_word = this.myForm.value['password']
   if(this.username == 'admin' && this.pass_word =='admin' ){
    localStorage.setItem('pass',this.pass_word);
    localStorage.setItem('uname',this.username);
    this.router.navigate(['']);
   }
   else {
    this.invalid=true;
    return;
   }  
  }

  get userName() { return this.myForm.get('userName') }
  get password() { return this.myForm.get('password') }




}
