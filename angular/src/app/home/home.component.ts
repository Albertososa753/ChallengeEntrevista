import { AuthService } from '@abp/ng.core';
import { Component  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  constructor(private authService: AuthService) { }
  
}
/*rows  =[]
 
 travelData: Travel = {
    origen: 'Ciudad A',
    destino: 'Ciudad B',
    fechaLlegada: '2023-09-15',
    fechaSalida: '2023-09-10',
    medioTransporte: 'Avión'
  }
 
  ngOnInit(){
this.rows = [
  {
    origen: 'Ciudad A',
    destino: 'Ciudad B',
    fechaLlegada: '2023-09-15',
    fechaSalida: '2023-09-10',
    medioTransporte: 'Avión'
  },
  {
    origen: 'Ciudad A',
    destino: 'Ciudad B',
    fechaLlegada: '2023-09-15',
    fechaSalida: '2023-09-10',
    medioTransporte: 'Avión'
  },
  {
    origen: 'Ciudad A',
    destino: 'Ciudad B',
    fechaLlegada: '2023-09-15',
    fechaSalida: '2023-09-10',
    medioTransporte: 'Avión'
  }
];
  }*/





