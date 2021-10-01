import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../_models/usermodel';

var $;

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})

export class UserRegistrationComponent implements OnInit, DoCheck {
  /** component-interaction by passing data from child to parent using @Input decorator */
  // @Input() model: any = {};
  model = new User;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
    ) {
    this.form = this.formBuilder.group({
      firstName: [this.model.firstName],
      lastName: [this.model.lastName],
      username: [this.model.username],
      phone: [this.model.phone],
      email: [this.model.email],
      password: [this.model.password],
      confirmpassword: [this.model.confirmpassword]
    })
  }
  ngOnInit(): void {
  }

  ngDoCheck() {

  }

  onSubmit() {
    if(this.form.valid){
      this.route.navigate(['/dashboard']);
    }
  }
  redirectToLogin(){
    this.route.navigate(['/login']);
  }

}
