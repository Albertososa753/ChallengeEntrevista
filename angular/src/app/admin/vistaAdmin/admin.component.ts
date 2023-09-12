

import { ChangeDetectorRef, Component, NgZone  } from '@angular/core';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  replaceableComponents: Set<any> = new Set(); // Inicializa replaceableComponents como un conjunto

 
  ColumnMode = ColumnMode;
 
  rows = [
    {
      origen: 'Ciudad A',
      destino: 'Ciudad B',
      fechaLlegada: '2023-09-15',
      fechaSalida: '2023-09-10',
      medioTransporte: 'Avión',
      deleteLabel: 'Borrar',
      editLabel: 'Editar'
    },
    {
      origen: 'Ciudad ASSS',
      destino: 'Ciudad AAAB',
      fechaLlegada: '2023-09-15',
      fechaSalida: '2023-09-10',
      medioTransporte: 'Avión',
      deleteLabel: 'Borrar',
      editLabel: 'Editar'
    },
    {
      origen: 'Ciudad ADDDD',
      destino: 'Ciudad BAAA',
      fechaLlegada: '2023-09-15',
      fechaSalida: '2023-09-10',
      medioTransporte: 'Avión',
       deleteLabel: 'Borrar',
      editLabel: 'Editar'
    }, {
      origen: 'Ciudad ADDDD',
      destino: 'Ciudad BAAA',
      fechaLlegada: '2023-09-15',
      fechaSalida: '2023-09-10',
      medioTransporte: 'Avión',
       deleteLabel: 'Borrar',
      editLabel: 'Editar'
    }
  ];

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  borrarRegistro(row: any) {
    // Aquí puedes implementar la lógica para borrar el registro
    console.log('Borrando registro:', row);
    // Agrega tu lógica de borrado personalizada aquí
  }

  editarRegistro(row: any) {
    // Aquí puedes implementar la lógica para editar el registro
    console.log('Editando registro:', row);
    // Agrega tu lógica de edición personalizada aquí
  }
  agregarNuevaFila() {
    // Crea una nueva fila (puedes personalizarla según tus necesidades)
   

    this.ngZone.run(() => {
      const nuevaFila = {
        origen: 'aaaa',
        destino: 'dsadad',
        fechaLlegada: 'dsadasd',
        fechaSalida: 'dsada',
        medioTransporte: 'dsada',
        deleteLabel: 'Borrar',
        editLabel: 'Editar',
      };
    
      // Agrega la nueva fila a tu arreglo 'rows'
      console.log('Longitud actual de rows antes:', this.rows.length);
  
      this.rows.push(nuevaFila);
      console.log('Longitud actual de rows después:', this.rows.length);
  
      this.cdr.detectChanges();
      console.log('Nueva fila agregada');

  })
 
} }

