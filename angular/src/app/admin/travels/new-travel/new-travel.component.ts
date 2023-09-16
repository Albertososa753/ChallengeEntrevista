import { Component } from '@angular/core';
import { TravelService } from '../../../proxy/travels/travel.service';
import { CreateUpdateTravelDto } from '../../../proxy/travels/models';
import { Transporte } from '../../../proxy/transportes/transporte.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-travel',
  templateUrl: './new-travel.component.html',
  styleUrls: ['./new-travel.component.scss'],
})
export class NewTravelComponent {
  transporteEnum = Transporte; 

  trave: CreateUpdateTravelDto = {
    fechaSalida: '',
    fechaLlegada: '',
    medioTransporte: null,
    origen: '',
    destino: '',
  };

  constructor(private travelService: TravelService, private router: Router) {}

  createTravel() {
    this.travelService.create(this.trave).subscribe(
      response => {
       
        console.log('Travel creado exitosamente');
        this.router.navigate(['/admin/travels/list-travel']);
      },
      error => {
        console.error('Error al crear Viaje', error);
      }
    );
  }
}
