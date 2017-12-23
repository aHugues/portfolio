import { Component, OnInit, Input } from '@angular/core';

import { Navlink } from '../navlink';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
})
export class NavbarButtonComponent implements OnInit {

  @Input() link: Navlink;

  constructor() {}

  ngOnInit() {

  }

  onLinkClicked(): void {
    console.log("coucou");
  }

}
