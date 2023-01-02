import { Component } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {
ngOnInit(): void {
 this.onload()
    }
onload(){
let username = localStorage.getItem('uname')
if(username != null){
 return
}else{
window.location.href='/login';
}
}
  
}
