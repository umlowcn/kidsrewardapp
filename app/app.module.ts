import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }          from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RoutinesModule }   from './components/routines/routines.module';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';

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
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
