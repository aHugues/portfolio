import { Component, OnInit } from '@angular/core';

import { Sample } from '../sample';
import { samplesList } from './samples';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
})
export class SamplesComponent implements OnInit {

  samples: Sample[];

  constructor() { }

  ngOnInit() {
    this.samples = samplesList;
  }

}
