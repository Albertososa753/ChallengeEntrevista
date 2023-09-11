using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;
using WB.EntrevistaABP.Passengers;
using WB.EntrevistaABP.Transportes;

namespace WB.EntrevistaABP.Travels;

public class Travel : AuditedAggregateRoot<Guid>
{
    public DateTime FechaSalida { get; set; }
    public DateTime FechaLlegada { get; set; }
    public string Origen { get; set; }
    public string Destino { get; set; }
    public Transporte MedioTransporte {get; set;}
    public List<Passenger>? Passengers { get; set; } 
}