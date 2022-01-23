import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../_models/usermodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  /** component-interaction by passing data from child to paremt using @Input decorator */
  model = new User;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: Router
    ) {
    this.form = this.formBuilder.group({
      username: [this.model.username],
      password: [this.model.password]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      alert("success!!" + JSON.stringify(this.model));
      this.route.navigate(['/dashboard']);
    }
  }
}
