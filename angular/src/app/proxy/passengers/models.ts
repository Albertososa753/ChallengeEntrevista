import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdatePassengerDto {
  name: string;
  surname: string;
  dni: number;
  dateBirth: string;
}

export interface PassengerDto extends AuditedEntityDto<string> {
  name?: string;
  surname?: string;
  dni: number;
  dateBirth?: string;
}
