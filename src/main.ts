import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Delegating business logic to Component scope services
// Validation based on multiple control values
// Reusable form components
// Custom form control
// Working with checkbox arrays in reactive forms
// Restoring the form state from the server
// Reseting a form
