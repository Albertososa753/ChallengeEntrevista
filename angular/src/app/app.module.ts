import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { AbpOAuthModule } from '@abp/ng.oauth';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HomeComponent } from './home/home.component';
import { ListTravelsComponent } from './admin/travels/list-travel/list-travel.component';
import { NewTravelComponent } from './admin/travels/new-travel/new-travel.component';
import { FormsModule } from '@angular/forms';
import { EditTravelComponent } from './admin/travels/edit-travel/edit-travel.component';
import { LayoutComponent } from './layout/layout.component';
import { ListPasajerosComponent } from './admin/pasajeros/list-pasajeros/list-pasajeros.component';
import { NewPasajeroComponent } from './admin/pasajeros/new-pasajero/new-pasajero.component';
import { AddPasajeroComponent } from './admin/travels/add-pasajero/add-pasajero.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ViajeAsociadoComponent } from './admin/pasajeros/viaje-asociado/viaje-asociado.component';


@NgModule({
  imports: [
    BrowserModule,
    NgxDatatableModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    AbpOAuthModule.forRoot(),
    ThemeSharedModule.forRoot(),
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    FeatureManagementModule.forRoot(),
    ThemeBasicModule.forRoot(),
  ],
  declarations: [AppComponent,HomeComponent ,ListTravelsComponent, NewTravelComponent, EditTravelComponent, LayoutComponent, ListPasajerosComponent,NewPasajeroComponent, AddPasajeroComponent, ClienteComponent, ViajeAsociadoComponent],
 // providers: [APP_ROUTE_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule { }
