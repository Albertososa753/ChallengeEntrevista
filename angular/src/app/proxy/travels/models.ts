import type { Transporte } from '../transportes/transporte.enum';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateTravelDto {
  fechaSalida: string;
  fechaLlegada: string;
  origen: string;
  destino: string;
  medioTransporte: Transporte;
}

export interface TravelDto extends AuditedEntityDto<string> {
  fechaSalida?: string;
  fechaLlegada?: string;
  origen?: string;
  destino?: string;
  medioTransporte: Transporte;
}
