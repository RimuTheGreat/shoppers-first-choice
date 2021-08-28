import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { User } from './_models/usermodel';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  login: boolean = true;
  register: boolean = false;
  model = new User();

  ngOnInit() { }

  currentRoute: string;

  constructor(private router: Router) {

    /** checks for the current activated route */
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.currentRoute = event['url'];
    })
  }
}