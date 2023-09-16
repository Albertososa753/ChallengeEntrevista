import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUpdateTravelDto, TravelDto, TravelService } from '@proxy/travels';

@Component({
  selector: 'app-edit-travel',
  templateUrl: './edit-travel.component.html',
  styleUrls: ['./edit-travel.component.scss'],
})
export class EditTravelComponent implements OnInit {
  travelDetails: CreateUpdateTravelDto;

  editingOrigin = false;
  editingDestination = false;
  editingDepartureDate = false;
  editingArrivalDate = false;
  editingTransport = false;

  constructor(
    private _route: ActivatedRoute,
    private _travelService: TravelService,
    private router: Router
  ) {}

  id: string;
  navigate() {
    this.router.navigate(['/admin/travels/add-pasajero/', this.id]);
  }
  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._travelService.get(this.id).subscribe((result: TravelDto) => {
        this.travelDetails = {
          fechaSalida: result.fechaSalida || '',
          fechaLlegada: result.fechaLlegada || '',
          origen: result.origen || '',
          destino: result.destino || '',
          medioTransporte: result.medioTransporte,
        };
        console.log(result);
      });
    });
  }

  editarCampo(campo: string) {
    // Activa el modo de edición para el campo especificado
    switch (campo) {
      case 'origen':
        this.editingOrigin = true;
        break;
      case 'destino':
        this.editingDestination = true;
        break;
      case 'fechaLlegada':
        this.editingArrivalDate = true;
        break;
      case 'fechaSalida':
        this.editingDepartureDate = true;
        break;
      case 'medioTransporte':
        this.editingTransport = true;
        break;
    }
  }

  getTransportName(transportValue: number) {}

  guardarCampo(campo: string) {
    // Desactiva el modo de edición para el campo especificado
    switch (campo) {
      case 'origen':
        this.editingOrigin = false;
        break;
      case 'destino':
        this.editingDestination = false;
        break;
      case 'fechaLlegada':
        this.editingArrivalDate = false;
        break;
      case 'fechaSalida':
        this.editingDepartureDate = false;
        break;
      case 'medioTransporte':
        this.editingTransport = false;
        break;
    }
  }

  guardarCambios() {
    console.log('Detalles actualizados:');
    this._travelService.update(this.id, this.travelDetails).subscribe(() => {
      console.log('VIAJE MODIFICADO CON ÉXITO!');
      this.ngOnInit();
      this.router.navigate(['/admin/travels/list-travel']);
    });
  }
}
