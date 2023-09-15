import { Component } from '@angular/core';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent {
  ColumnMode = ColumnMode;

  rows = [
    {
      id: '123',
      origen: 'San Nicolas',
      destino: 'Rosario',
      fechaLlegada: '14/12/2024',
      fechaSalida: '13/12/2024',
      medioTransporte: 'Tren',
    },
  ];
}
