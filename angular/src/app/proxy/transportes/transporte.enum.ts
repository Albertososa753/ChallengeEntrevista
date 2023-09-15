import { mapEnumToOptions } from '@abp/ng.core';

export enum Transporte {
  Tren = 0,
  Avion = 1,
  Micro = 2,
}

export const transporteOptions = mapEnumToOptions(Transporte);
