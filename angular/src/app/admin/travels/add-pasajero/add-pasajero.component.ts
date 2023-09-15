import { Component, OnInit } from '@angular/core';
import { PassengerService } from '@proxy/passengers';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUpdateViajePasajeroDto, ViajePasajeroService } from '@proxy/viaje-pasajeros';
import { TravelDto, TravelService } from '@proxy/travels';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-pasajeros',
  templateUrl: './add-pasajero.component.html',
  styleUrls: ['./add-pasajero.component.scss'],
  providers: [DatePipe], // Agrega DatePipe como proveedor
})
export class AddPasajeroComponent implements OnInit {
  ColumnMode = ColumnMode;

  idPasajero: string;
  idViaje: string;
  viaje: TravelDto[] = [];

  rows: {
    id: string;
    name: string;
    surname: string;
    dni: number;
    dateBirth: string;
  }[] = [];

  constructor(
    private _serviceViaje: TravelService,
    private _servicePasajero: PassengerService,
    private _serviceViajePasajero: ViajePasajeroService,
    private router: Router,
    private _route: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    this._route.params.subscribe(params => {
      this.idViaje = params['id'];

      this._serviceViaje.get(this.idViaje).subscribe((travel: TravelDto) => {
        this.viaje = [travel];
      });
    });
  }

  ngOnInit() {
    this._servicePasajero
      .getList({ sorting: '', skipCount: 0, maxResultCount: 100 })
      .subscribe(response => {
        this.rows = response.items.map(pasajero => {
          return {
            id: pasajero.id,
            name: pasajero.name,
            surname: pasajero.surname,
            dni: pasajero.dni,
            dateBirth: this.datePipe.transform(pasajero.dateBirth, 'dd-MM-yyyy'),
          };
        });
      });
  }

  addPasajeroViaje(row: string) {
    this.idPasajero = row;

    this._route.params.subscribe(params => {
      this.idViaje = params['id'];

      // Crea un objeto CreateUpdateViajePasajeroDto y asígnale los valores
      const dto: CreateUpdateViajePasajeroDto = {
        idPasajero: this.idPasajero,
        idViaje: this.idViaje,
      };

      // Llama al servicio con el objeto dto en lugar de las cadenas
      this._serviceViajePasajero.create(dto).subscribe(
        response => {
          // Maneja la respuesta aquí
          console.log('Operación de creación exitosa', response);
        },
        error => {
          console.error('No se pudo asignar el pasajero al viaje', error);
        }
      );
    });
  }
}
