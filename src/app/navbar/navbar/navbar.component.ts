import { Component, OnInit } from '@angular/core';

import { Navlink } from '../navlink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  private navlinks: Navlink[];

  constructor() { }

  ngOnInit() {
    this.navlinks = [];

    let homeLink = new Navlink();
    homeLink.viewValue = "Home";
    homeLink.linkValue = "/";

    let porygonLink = new Navlink();
    porygonLink.viewValue = "Porygon";
    porygonLink.linkValue = "http://porygon.aurelienhugues.com";

    this.navlinks.push(homeLink);
    this.navlinks.push(porygonLink);
  }

}
