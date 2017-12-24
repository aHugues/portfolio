import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplesComponent } from './samples-list/samples.component';

const routes: Routes = [
  { path: 'samples', component: SamplesComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SamplesRoutingModule { }
