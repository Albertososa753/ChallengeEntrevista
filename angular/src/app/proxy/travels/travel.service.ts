import type { CreateUpdateTravelDto, TravelDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  apiName = 'Default';

  create = (input: CreateUpdateTravelDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TravelDto>(
      {
        method: 'POST',
        url: '/api/app/travel',
        body: input,
      },
      { apiName: this.apiName, ...config }
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/travel/${id}`,
      },
      { apiName: this.apiName, ...config }
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TravelDto>(
      {
        method: 'GET',
        url: `/api/app/travel/${id}`,
      },
      { apiName: this.apiName, ...config }
    );

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TravelDto>>(
      {
        method: 'GET',
        url: '/api/app/travel',
        params: {
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName, ...config }
    );

  update = (id: string, input: CreateUpdateTravelDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TravelDto>(
      {
        method: 'PUT',
        url: `/api/app/travel/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config }
    );

  constructor(private restService: RestService) {}
}
