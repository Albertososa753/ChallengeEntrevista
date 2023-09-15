import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  private userType: string = ''; // 'admin' o 'cliente'

  setUserType(type: string) {
    this.userType = type;
  }

  getUserType(): string {
    return this.userType;
  }
}
