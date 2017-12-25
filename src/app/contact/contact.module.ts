import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRouterModule } from './contact-router.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRouterModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
