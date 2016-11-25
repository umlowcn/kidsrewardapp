import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }          from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RoutinesModule }   from './components/routines/routines.module';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login.component';

import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { AuthService }      from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  imports: [ 
      BrowserModule, 
      HttpModule, 
      FormsModule,
      RoutinesModule,
      AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    LoginComponent
  ],
  providers: [
        AUTH_PROVIDERS,
        AuthService,
        AuthGuard
  ],  
  bootstrap: [ AppComponent ]
})

export class AppModule { }
