import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, NavbarButtonComponent],
  exports: [
    NavbarComponent,
    NavbarButtonComponent,
  ]
})
export class NavbarModule { }
