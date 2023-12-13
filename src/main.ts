import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from '~environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter([
      {
        path: '',
        component: AppComponent,
        pathMatch: 'full',
      },
    ]),
  ],
});
