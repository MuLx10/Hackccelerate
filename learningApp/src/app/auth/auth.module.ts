import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [AuthRoutingModule, MatCardModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatButtonModule, MatDividerModule, MatIconModule, MatStepperModule, ReactiveFormsModule, MatGridListModule, MatRadioModule],
  declarations: [LoginComponent, SignupComponent],
})
export class AuthModule {}
