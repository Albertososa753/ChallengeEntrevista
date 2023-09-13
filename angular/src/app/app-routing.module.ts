import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AdminComponent } from './admin/travels/list-travel/list-travel.component';
import { LoginComponent } from './login/login.component';
import { NewTravelComponent } from './admin/travels/new-travel/new-travel.component';
import { EditTravelComponent } from './admin/travels/edit-travel/edit-travel.component';

const routes: Routes = [
  {
    path: '' , component:AdminComponent,
    
  },
  {
    path: 'login' , component:LoginComponent,
    
  },
  {
    path: 'admin/newTravel' , component: NewTravelComponent,
    
  },
  {
    path: 'admin/editTravel/:id' , component: EditTravelComponent,
    
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
