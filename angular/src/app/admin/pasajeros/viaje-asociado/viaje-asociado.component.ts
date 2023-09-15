import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CreateUpdatePassengerDto, PassengerDto, PassengerService } from '@proxy/passengers';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-viaje-asociado',
  templateUrl: './viaje-asociado.component.html',
  styleUrls: ['./viaje-asociado.component.scss'],
})
export class ViajeAsociadoComponent implements OnInit {
  travelData = [
    {
      origen: 'Ciudad A',
      destino: 'Ciudad B',
      fechaLlegada: '2023-09-15',
      fechaSalida: '2023-09-10',
      medioTransporte: 'Avión',
    },
    {
      origen: 'Ciudad A',
      destino: 'Ciudad B',
      fechaLlegada: '2023-09-15',
      fechaSalida: '2023-09-10',
      medioTransporte: 'Avión',
    },
    {
      origen: 'Ciudad A',
      destino: 'Ciudad B',
      fechaLlegada: '2023-09-15',
      fechaSalida: '2023-09-10',
      medioTransporte: 'Avión',
    },
    {
      origen: 'Ciudad A',
      destino: 'Ciudad B',
      fechaLlegada: '2023-09-15',
      fechaSalida: '2023-09-10',
      medioTransporte: 'Avión',
    },
    {
      origen: 'Ciudad A',
      destino: 'Ciudad B',
      fechaLlegada: '2023-09-15',
      fechaSalida: '2023-09-10',
      medioTransporte: 'Avión',
    },
  ];

  ColumnMode = ColumnMode;

  pasajeroDetails: {
    id: string;
    name: string;
    surname: string;
    dni: number;
    dateBirth: string;
  }[] = [];
  idPasajero: string;

  constructor(private _servicePasajero: PassengerService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPasajero = params['id'];
      this._servicePasajero.get(this.idPasajero).subscribe((pasajero: PassengerDto) => {
        this.pasajeroDetails = [
          {
            id: this.idPasajero,
            name: pasajero.name,
            surname: pasajero.surname,
            dni: pasajero.dni,
            dateBirth: pasajero.dateBirth,
          },
        ];
        console.log(this.pasajeroDetails, 'aaaaaaaaa');
      });
    });
  }
}
