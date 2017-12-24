import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesRoutingModule } from './samples-routing.module';
import { SamplesComponent } from './samples-list/samples.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  imports: [
    CommonModule,
    SamplesRoutingModule
  ],
  declarations: [SamplesComponent, SampleComponent],
})
export class SamplesModule { }
