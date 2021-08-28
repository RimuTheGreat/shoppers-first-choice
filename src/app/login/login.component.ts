import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { User } from '../_models/usermodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /** component-interaction by passing data from child to paremt using @Input decorator */
  model= new User;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("success!!" + JSON.stringify(this.model));
  }

  returnUserObj(){
    const encryptedNewPassword = CryptoJS.SHA256(this.model.password);
    const encryptePassword = encryptedNewPassword.toString();
    const eeObj = {
      password: encryptePassword,
    }
    return eeObj;
  }
}
