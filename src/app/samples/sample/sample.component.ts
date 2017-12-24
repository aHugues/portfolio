import { Component, OnInit, Input } from '@angular/core';

import { Sample } from '../sample';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
})
export class SampleComponent implements OnInit {

  @Input() sample: Sample;

  constructor() { }

  ngOnInit() {
  }

}
