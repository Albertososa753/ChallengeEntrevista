


using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;
using WB.EntrevistaABP.Travels;

namespace WB.EntrevistaABP.Passengers;

public class Passenger : AuditedAggregateRoot<Guid>

{
    public string Name { get; set;}
    public string Surname { get; set;}
    public int DNI { get; set;}
    public DateTime DateBirth { get; set;}
    public List<Travel>? travels { get; set; }
}