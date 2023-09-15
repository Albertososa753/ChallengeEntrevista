import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  replaceableComponents: Set<any> = new Set(); // Inicializa replaceableComponents como un conjunto

  constructor() {}
  ngOnInit(): void {}
}
