import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import {  ListTravelsComponent } from './admin/travels/list-travel/list-travel.component';
import { LoginComponent } from './login/login.component';
import { NewTravelComponent } from './admin/travels/new-travel/new-travel.component';
import { EditTravelComponent } from './admin/travels/edit-travel/edit-travel.component';
import { ListPasajerosComponent } from './admin/pasajeros/list-pasajeros/list-pasajeros.component';
import {  NewPasajeroComponent } from './admin/pasajeros/new-pasajero/new-pasajero.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'admin/travels/list-travel' , component:ListTravelsComponent,
    
  },
  {
    path: '' , component:HomeComponent,
    
  },
  {
    path: 'admin/travels/newTravel' , component: NewTravelComponent,
    
  },
  {
    path: 'admin/travels/editTravel/:id' , component: EditTravelComponent,
    
  },
  {
    path: 'admin/pasajeros/list-pasajeros' , component: ListPasajerosComponent,
    
  },
  {
    path: 'admin/pasajeros/newPasajeros' , component: NewPasajeroComponent,
    
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
