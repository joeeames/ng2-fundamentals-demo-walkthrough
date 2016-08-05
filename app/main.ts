import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms }    from '@angular/forms';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDER } from './routes';
import {  } from './users/';


bootstrap(AppComponent, [
    HTTP_PROVIDERS, 
    APP_ROUTER_PROVIDER,
    // disableDeprecatedForms(),
    // provideForms()
  ]);
