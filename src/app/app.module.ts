import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// import { SharedModule } from './shared/shared.module';
// import { Route, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';

import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { appRoutingModule } from './app-routing.module';
import { CryptoDirective } from './custom/crypto.directive';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
];

@NgModule({
  imports: [
    BrowserModule, FormsModule, CommonModule, ...modules, appRoutingModule
  ],
  exports: [BrowserAnimationsModule, ...modules],
  providers: [],
  declarations: [AppComponent, LoginComponent, UserRegistrationComponent, CryptoDirective],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
