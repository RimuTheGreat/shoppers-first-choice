import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatButtonModule, MatDialogModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

const appRoutes = [
  {path: 'dashboard', component: 'DashboardComponent'},
  {path: 'header', component: 'HeaderComponent'},
  {path: 'footer', component: 'FooterComponent'},
];

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class SharedModule { }
