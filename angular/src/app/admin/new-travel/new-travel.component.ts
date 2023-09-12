import { Component } from '@angular/core';

@Component({
  selector: 'app-new-travel',
  templateUrl: './new-travel.component.html',
  styleUrls: ['./new-travel.component.scss']
})
export class NewTravelComponent {
  fechaLlegada: Date;
  fechaSalida: Date;
  medioTransporte: string;

}
