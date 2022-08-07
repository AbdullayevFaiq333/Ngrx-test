import { setLoadingSpinner } from './../../store/Shared/shared.actions';
import { loginStart } from './../state/auth.actions';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])
    })
  }

  onLoginSubmit(){
    const email=this.loginForm.value.email;
    const password=this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({status:true}));
    this.store.dispatch(loginStart({email,password}));
  }

}
