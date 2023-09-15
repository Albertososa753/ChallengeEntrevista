import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassengerService } from '@proxy/passengers';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

@Component({
  selector: 'app-list-pasajeros',
  templateUrl: './list-pasajeros.component.html',
  styleUrls: ['./list-pasajeros.component.scss']
})
export class ListPasajerosComponent implements OnInit {
  ColumnMode = ColumnMode;
  constructor(private _servicePasajero: PassengerService, private router: Router) { }
  rows: {
    id: string;
    name: string;
    surname: string;
    dni: number;
    dateBirth: string;
  }[] = [];
  ngOnInit() {
    this._servicePasajero.getList({ sorting: '', skipCount: 0, maxResultCount: 100 }).subscribe((response) => {
      this.rows = response.items.map((travel) => {
        return {
          id: travel.id,
          name: travel.name,
          surname: travel.surname,
          dni: travel.dni,
          dateBirth: travel.dateBirth,
        
        };
      });  })
 
  }
  borrarPasajero(row: string) {
    this._servicePasajero.delete(row)
      .subscribe(() => {
        this.ngOnInit(); // Llama a ngOnInit para recargar la lista de viajes
      }, (error) => {
        console.error('Error al borrar el registro', error);
      });
  }
}
