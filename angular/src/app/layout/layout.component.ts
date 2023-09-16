import { Component } from '@angular/core';
import { UserStateService } from '../serv/ser.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  selectedUserRole: string = 'cliente';

  constructor(private userStateService: UserStateService) {}

  onUserTypeChange() {
    if (this.selectedUserRole === 'admin') {
      this.userStateService.setUserType(this.selectedUserRole);
    }
  }
}
