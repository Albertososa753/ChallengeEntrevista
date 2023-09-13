import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateViajePasajeroDto {
  idPasajero: string;
  idViaje: string;
}

export interface ViajePasajeroDto extends AuditedEntityDto<string> {
  idPasajero?: string;
  idViaje?: string;
}
