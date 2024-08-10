import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth:AuthService){}
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });


   
  }

  onsubmit(){
    console.log(this.loginForm.value)
    this.auth.login(this.loginForm.value.email,this.loginForm.value.password)
  }

  login(){

    if (this.loginForm.value.email == ''){
      alert('please enter email')
      return;
    }

 if (this.loginForm.value.password == ''){
      alert('please enter password')
      return;
    }
   
    
  }

}
