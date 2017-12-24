import { Component, OnInit } from '@angular/core';

import { Sample } from '../sample';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
})
export class SamplesComponent implements OnInit {

  sample: Sample;

  constructor() { }

  ngOnInit() {

    this.sample = new Sample();
    this.sample.title = "Porygon";
    this.sample.description = "Porygon application";
    

  }

}
