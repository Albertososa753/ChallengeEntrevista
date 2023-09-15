import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ListTravelsComponent } from './admin/travels/list-travel/list-travel.component';
import { LoginComponent } from './login/login.component';
import { NewTravelComponent } from './admin/travels/new-travel/new-travel.component';
import { EditTravelComponent } from './admin/travels/edit-travel/edit-travel.component';
import { ListPasajerosComponent } from './admin/pasajeros/list-pasajeros/list-pasajeros.component';
import { NewPasajeroComponent } from './admin/pasajeros/new-pasajero/new-pasajero.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './guar/guar.guard'; // Asegúrate de importar el guardia correctamente
import { AddPasajeroComponent } from './admin/travels/add-pasajero/add-pasajero.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ViajeAsociadoComponent } from './admin/pasajeros/viaje-asociado/viaje-asociado.component';

const routes: Routes = [
  {
    path: 'admin/travels/list-travel',
    component: ListTravelsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/travels/add-pasajero/:id',
    component: AddPasajeroComponent,
    canActivate: [AdminGuard],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin/travels/newTravel',
    component: NewTravelComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/travels/editTravel/:id',
    component: EditTravelComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/pasajeros/list-pasajeros',
    component: ListPasajerosComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/pasajeros/newPasajeros',
    component: NewPasajeroComponent,
    canActivate: [AdminGuard],
  },
  { path: 'admin/pasajero/viaj-asociad/:id', component: ViajeAsociadoComponent },
  {
    path: 'cliente/misViajes',
    component: ClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
