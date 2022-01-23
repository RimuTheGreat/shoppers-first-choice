import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { appRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './core/common.service';


@NgModule({
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, RouterModule, appRoutingModule, SharedModule, HttpClientModule
  ],
  exports: [BrowserAnimationsModule, RouterModule],
  providers: [CommonService],
  declarations: [AppComponent, LoginComponent, UserRegistrationComponent],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
