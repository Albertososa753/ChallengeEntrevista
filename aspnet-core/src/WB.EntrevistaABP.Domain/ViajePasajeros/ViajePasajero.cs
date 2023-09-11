using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace WB.EntrevistaABP.ViajePasajeros;


public class ViajePasajero : AuditedAggregateRoot<Guid>{

public Guid IdPasajero {get;set;}
public Guid IdViaje {get;set;}

}