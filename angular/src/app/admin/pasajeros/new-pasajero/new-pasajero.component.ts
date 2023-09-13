import { Component } from '@angular/core';
import { PassengerService } from '../../../proxy/passengers/passenger.service'; // Importa el servicio necesario para agregar pasajeros
import { CreateUpdatePassengerDto } from '@proxy/passengers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pasajero',
  templateUrl: './new-pasajero.component.html',
  styleUrls: ['./new-pasajero.component.scss']
})
export class NewPasajeroComponent {
  
  nuevoPasajero: CreateUpdatePassengerDto = {
    name: null,
    surname: null,
    dni: null,
    dateBirth: null,
   
  };

  constructor(private pasajeroService: PassengerService, private router : Router) {}

  agregarPasajero() {
    // Llama al servicio para agregar el nuevo pasajero
    this.pasajeroService.create(this.nuevoPasajero).subscribe(
      (response) => {
        // Maneja la respuesta del servicio, por ejemplo, muestra un mensaje de éxito
        console.log('Pasajero agregado con éxito:', response);
        // Limpia el formulario
        this.router.navigate(['/admin/pasajeros/list-pasajeros']);

      },
      (error) => {
        // Maneja los errores, por ejemplo, muestra un mensaje de error
        console.error('Error al agregar pasajero:', error);
      }
    );
  }
}
