import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { eAccountComponents } from '@abp/ng.account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  replaceableComponents: Set<any> = new Set(); // Inicializa replaceableComponents como un conjunto
  constructor() {}

  ngOnInit() {
    // Realiza la inicialización aquí
    this.replaceableComponents.add({
      component: LoginComponent,
      key: eAccountComponents.Login,
    });
  }
}