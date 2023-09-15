import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserStateService } from '../serv/ser.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private userStateService: UserStateService, private router: Router) {}

  canActivate(): boolean {
    const userType = this.userStateService.getUserType();
    console.log('User Type:', userType); // Verifica que userType sea "admin" cuando seleccionas "Admin" en el select

    if (userType === 'admin') {
      return true; // El usuario es un Admin y tiene acceso.
    } else if (userType === 'cliente') {
      this.router.navigate(['/cliente']); // Redirigir al usuario a la página de inicio u otra página apropiada.
    } else {
      return false;
    }
  }
}
