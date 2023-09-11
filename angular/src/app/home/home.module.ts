import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [HomeComponent, TableComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
