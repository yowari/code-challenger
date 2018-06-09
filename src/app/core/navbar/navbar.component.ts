import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {

  appUser: AppUser = null;

  constructor(private auth: AuthService, config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
  }

  ngOnInit(): void {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  login(): void {
    this.auth.login();
  }

  logout(): void {
    this.auth.logout();
  }

}
