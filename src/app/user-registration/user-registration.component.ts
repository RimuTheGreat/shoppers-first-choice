import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
// import { $ } from 'protractor';

var $;

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit, DoCheck {
  /** component-interaction by passing data from child to paremt using @Input decorator */
  @Input() model: any = {};
  @Input() register: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck() {

  }

  checkRedirect = $('a').click(function (event) {
    window.alert("checked");
    console.log(event);
  });

  redirectToLogin() {
    this.router.navigate['/login'];
  }

}
