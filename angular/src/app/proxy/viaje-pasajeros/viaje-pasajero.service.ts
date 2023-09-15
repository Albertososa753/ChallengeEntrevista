import type { CreateUpdateViajePasajeroDto, ViajePasajeroDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViajePasajeroService {
  apiName = 'Default';
  

  create = (input: CreateUpdateViajePasajeroDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ViajePasajeroDto>({
      method: 'POST',
      url: '/api/app/viaje-pasajero',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/viaje-pasajero/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ViajePasajeroDto>({
      method: 'GET',
      url: `/api/app/viaje-pasajero/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ViajePasajeroDto>>({
      method: 'GET',
      url: '/api/app/viaje-pasajero',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateViajePasajeroDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ViajePasajeroDto>({
      method: 'PUT',
      url: `/api/app/viaje-pasajero/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
