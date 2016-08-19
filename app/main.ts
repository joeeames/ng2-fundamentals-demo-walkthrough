import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent } from './app.component';
// import { HTTP_PROVIDERS } from '@angular/http';
// import { APP_ROUTER_PROVIDER } from './routes';
import {  } from './users/';


platformBrowserDynamic().bootstrapModule(AppModule)//, [
    // HTTP_PROVIDERS, 
    // APP_ROUTER_PROVIDER,
    // disableDeprecatedForms(),
    // provideForms()
  // ]);
