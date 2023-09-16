import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transporte } from '@proxy/transportes';
import { TravelService } from '@proxy/travels';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './list-travel.component.html',
  styleUrls: ['./list-travel.component.scss'],
  providers: [DatePipe], 
})
export class ListTravelsComponent implements OnInit {
  replaceableComponents: Set<any> = new Set(); // Inicializa replaceableComponents como un conjunto

  ColumnMode = ColumnMode;

  rows: {
    id: string;
    origen: string;
    destino: string;
    fechaLlegada: string;
    fechaSalida: string;
    medioTransporte: Transporte;
  }[] = [];

  constructor(
    private travelService: TravelService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.travelService
      .getList({ sorting: '', skipCount: 0, maxResultCount: 100 }) 
      .subscribe(
        result => {
          this.rows = result.items.map(travel => {
            return {
              id: travel.id,
              origen: travel.origen,
              destino: travel.destino,
              fechaLlegada: this.datePipe.transform(travel.fechaLlegada, 'dd-MM-yyyy'),
              fechaSalida: this.datePipe.transform(travel.fechaSalida, 'dd-MM-yyyy'),
              medioTransporte: travel.medioTransporte,
            };
          });
        },
        error => {
          console.error('Error al obtener la lista de viajes', error);
        }
      );
  }
  borrarRegistro(row: any) {
    this.travelService.delete(row).subscribe(
      () => {
        this.ngOnInit(); 
      },
      error => {
        console.error('Error al borrar el registro', error);
      }
    );
  }

  getTransportName(transportValue: number): string {
    switch (transportValue) {
      case Transporte.Tren:
        return 'Tren';
      case Transporte.Avion:
        return 'Avión';
      case Transporte.Micro:
        return 'Micro';
      default:
        return 'Desconocido';
    }
  }
 
}
