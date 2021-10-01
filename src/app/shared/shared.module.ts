import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatButtonModule, MatDialogModule, MatRippleModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatDialogModule
];

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DashboardComponent],
  imports: [
    RouterModule,
    CommonModule,
    ...modules
  ],
  exports: [...modules, DashboardComponent]
})
export class SharedModule { }
