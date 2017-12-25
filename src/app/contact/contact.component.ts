import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  returnEmail: string;
  content: string;

  constructor() { }

  ngOnInit() {
  }

}
