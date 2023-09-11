using System;
using System.Dynamic;
using Volo.Abp.Application.Dtos;
using WB.EntrevistaABP.Transportes;

namespace WB.EntrevistaABP.Travels;

public class TravelDto : AuditedEntityDto<Guid>
{
    public DateTime FechaSalida { get; set; }
    public DateTime FechaLlegada { get; set; }
    public string Origen { get; set; }
    public string Destino { get; set; }
    public Transporte MedioTransporte {get; set;}    
}
