import { SignupComponent } from './signup/signup.component';
import { AuthEffects } from './state/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


const routes:Routes=[
    {
        path:'',
        children:[
            {path:'',redirectTo:'login', pathMatch: 'full'},
            {path:'login',component:LoginComponent},
            {path:'signup',component:SignupComponent},
        ],
    },
];

@NgModule({
    declarations:[LoginComponent,SignupComponent],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        EffectsModule.forFeature(),
        RouterModule.forChild(routes)],
})

export class AuthModule{}