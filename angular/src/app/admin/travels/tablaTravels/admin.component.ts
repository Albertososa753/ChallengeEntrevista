import { ChangeDetectorRef, Component, NgZone, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Transporte } from '@proxy/transportes';
import { TravelService } from '@proxy/travels'
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  replaceableComponents: Set<any> = new Set(); // Inicializa replaceableComponents como un conjunto

  ColumnMode = ColumnMode;
  
  rows: {
    id: string;
    origen: string;
    destino: string;
    fechaLlegada: string;
    fechaSalida: string;
    medioTransporte: Transporte; 
    deleteLabel: string;
  }[] = [];

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone, private travelService: TravelService, private router : Router) {}

  ngOnInit() {
    // Llama al servicio para obtener la lista de viajes
    this.travelService.getList({ sorting: '', skipCount: 0, maxResultCount: 100 }) // Ajusta los parámetros según tus necesidades
      .subscribe((result) => {
        console.log(result,'hp;a')
        // Mapea los datos del servicio al formato esperado por la tabla
        this.rows = result.items.map((travel) => {
          return {
            id: travel.id,
            origen: travel.origen,
            destino: travel.destino,
            fechaLlegada: travel.fechaLlegada,
            fechaSalida: travel.fechaSalida,
            medioTransporte: travel.medioTransporte,
            deleteLabel: 'Borrar', // Puedes establecer el valor que desees aquí
          };
        });
      }, (error) => {
        console.error('Error al obtener la lista de viajes', error);
      });
  }
  borrarRegistro(row: any) {
    this.travelService.delete(row)
      .subscribe(() => {
        this.ngOnInit(); // Llama a ngOnInit para recargar la lista de viajes
      }, (error) => {
        console.error('Error al borrar el registro', error);
      });
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
  redirigirAEdition(event: any) {
    // Verifica si el evento es un clic en una fila y si tiene un ID válido
    if (event.type === 'click' && event.row ) {
      const travelId = event.row.id;
      this.router.navigate(['admin/editTravel', travelId]);
    }
  }

} 

