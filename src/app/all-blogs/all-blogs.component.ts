import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
//import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent {
  constructor(private ser : ServicesService,private toast:ToastrService ){}
  btn_modal:any='save';
  p: number = 1;
  totallength:number=0;
  blog:any= [];
  allblogs:any=[];
  data:any=[];
  hidepaginatoin=true;
  no_record=false;
  postid:any = 0;
  fileName:any='';
  img_url:any;
  
  ngOnInit(): void {
    this.img_url=this.ser.img_url
  }
  
  my_form = new FormGroup({
  
    blogTitle: new FormControl(null,[Validators.required]),
    blogDescription: new FormControl(null, [Validators.required]),
    document: new FormControl(null, [Validators.required]),
    postBy: new FormControl(null, Validators.required),
    blogId: new FormControl(null)
    
  });
  // form validation
  
  // form controls
  get blogTitle(){
    return this.my_form.controls
  }
  get blogDescription(){
    return this.my_form.controls
  }
  get document(){
    return this.my_form.controls
  }
  get postBy(){
    return this.my_form.controls
  }
  // form controls
  
  onSubmit(d:any){
    this.getallblog()
    if(this.btn_modal == 'save'){
       this.data = {
        BlogDetail : d.blogTitle,
        BlogDescription : d.blogDescription,
        Document: d.document,
        PostBy: this.postid++,
  
      }
     
     this.blog.push(this.data);
      
      console.log(this.blog,"singlebklog")
    
      this.toast.success('congratulations','Your Blog is Uploaded succesfully');
     
    }
    
    else if (this.btn_modal == 'update'){
      let data = {
        BlogDetail : d.blogTitle,
        BlogDescription : d.blogDescription,
        Document: d.document,
        PostBy: this.postBy
  
      }
    }
    }
  
    delete_blog(){
  
    }
   
    onFileSelected(event:any) {
      // const file:File = event.target.files[0];
      // console.log('hh', file)
      // if (file) {
      //     this.fileName = file.name;
      //     const formData = new FormData();
      //     formData.append("thumbnail", file);
      //     let data={
      //       input_image:file
      //     }
      //     console.log('aaa',data);
      //     this.ser.image1(file).subscribe(res=>{
      //       console.log('GERE',res);
      //     })
      // }
  }
    edit_blog(){
  
    }
    getallblog(){
      for(let i = 0; i< this.blog.length; i++){
        this.allblogs.push(this.blog[i])
      }
      console.log(this.allblogs,"allblogs")
    }
}
