import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticateService } from '../core/services/authenticate.service';
import { User } from '../_models/usermodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: String;
  error = '';
  public loginForm: FormGroup;

  /** component-interaction by passing data from child to paremt using @Input decorator */
  model = new User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticateService: AuthenticateService
  ) {
    if (this.authenticateService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    // if (this.form.valid) {
    //   alert("success!!" + JSON.stringify(this.model));
    //   this.route.navigate(['/dashboard']);
    // }
    console.log(this.loginForm.value);
    
    console.log('2. triggered in login to validate');
    this.authenticateService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(data => {
      this.router.navigate([this.returnUrl]);
      console.log("hurrah successful");
    },
      errors => {
        this.error = errors;
        console.log("got error section");
      }
    );
  }
}
