import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { SamplesModule } from './samples/samples.module';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    NavbarModule,
    HomeModule,
    SamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
