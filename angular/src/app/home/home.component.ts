import { AuthService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.iniciarSesion();
  }

  iniciarSesion() {
    let username = 'admin';
    let password = '1q2w3E*';
    let rememberMe = true;
    let redirectUrl = '/';
    this.authService.login({ username, password, rememberMe, redirectUrl }).subscribe(() => {});
  }
}
