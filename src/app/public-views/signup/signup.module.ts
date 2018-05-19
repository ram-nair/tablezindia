import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { HeaderModule } from 'app/shared/layouts/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    Ng2DeviceDetectorModule.forRoot()
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
