import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Navlink } from '../navlink';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
})
export class NavbarButtonComponent implements OnInit {

  @Input() link: Navlink;
  @Output() clicked = new EventEmitter<any>();

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.isActive();
  }

  onLinkClicked(): void {
    this.router.navigate([this.link.linkValue]);
    this.clicked.emit();
  }

  isActive(): Boolean {
    return this.router.url.substring(1) === this.link.linkValue;
  }

}
