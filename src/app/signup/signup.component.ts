import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private auth:AuthService){}


  signupForm!: FormGroup;

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.signupForm = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required])

    });

   
  }

  onsubmit(){
    console.log(this.signupForm.value)
    if (this.signupForm.value.password==this.signupForm.value.confirmpassword){

      this.auth.register(this.signupForm.value.email,this.signupForm.value.password)
    }
   else{
    alert("password mismatch")
   }
  }
  
  signup(){

    if (this.signupForm.value.email == ''){
      alert('please enter email')
      return;
    }

 if (this.signupForm.value.password == ''){
      alert('please enter password')
      return;
    }
   
    
  }

}
