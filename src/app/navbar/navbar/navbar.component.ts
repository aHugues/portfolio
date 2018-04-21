import { Component, OnInit } from '@angular/core';

import { Navlink } from '../navlink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  public navlinks: Navlink[];
  private expanded: Boolean = false;

  constructor() { }

  ngOnInit() {
    this.navlinks = [];

    const homeLink = new Navlink();
    homeLink.viewValue = 'Home';
    homeLink.linkValue = 'home';

    const porygonLink = new Navlink();
    porygonLink.viewValue = 'Application samples';
    porygonLink.linkValue = 'samples';

    const contactLink = new Navlink();
    contactLink.viewValue = 'Contact';
    contactLink.linkValue = 'contact';

    this.navlinks.push(homeLink);
    this.navlinks.push(porygonLink);
    this.navlinks.push(contactLink);
  }

  toggleVerticalNavbar(): void {
    if (this.expanded) {
      document.getElementById('verticalNavbar').classList.remove('expanded');
    } else {
      document.getElementById('verticalNavbar').classList.add('expanded');
    }
    this.expanded = !this.expanded;
  }

}
