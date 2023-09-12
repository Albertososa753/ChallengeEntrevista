import {  Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  replaceableComponents: Set<any> = new Set(); // Inicializa replaceableComponents como un conjunto
}

