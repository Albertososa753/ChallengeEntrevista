import { Component } from '@angular/core';
import { TravelService } from '../../../proxy/travels/travel.service';
import { CreateUpdateTravelDto } from '../../../proxy/travels/models';
import { Transporte } from '../../../proxy/transportes/transporte.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-travel',
  templateUrl: './new-travel.component.html',
  styleUrls: ['./new-travel.component.scss']
})
export class NewTravelComponent {
  transporteEnum = Transporte; // Agrega esta línea para crear una referencia al enum

  trave: CreateUpdateTravelDto = {
    fechaSalida: null,
    fechaLlegada: null,
    medioTransporte: null,
    origen: '',
    destino: ''
  };

  constructor(private travelService: TravelService, private router: Router) {}

  createTravel() {
    this.travelService.create(this.trave)
      .subscribe((response) => {
        // Manejar la respuesta exitosa aquí (por ejemplo, redirección o notificación de éxito).
        console.log('Travel creado exitosamente', response);
        this.router.navigate(['/']);

      }, (error) => {
        // Manejar errores aquí (por ejemplo, mostrar un mensaje de error).
        console.error('Error al crear Travel', error);
      });
  }
}