import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AdminComponent } from './admin/vistaAdmin/admin.component';
import { LoginComponent } from './login/login.component';
import { NewTravelComponent } from './admin/new-travel/new-travel.component';

const routes: Routes = [
  {
    path: 'admin' , component:AdminComponent,
    
  },
  {
    path: 'login' , component:LoginComponent,
    
  },
  {
    path: 'admin/newTravel' , component: NewTravelComponent,
    
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
