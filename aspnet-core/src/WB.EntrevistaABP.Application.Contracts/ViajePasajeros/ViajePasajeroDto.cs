using System;
using Volo.Abp.Application.Dtos;

namespace WB.EntrevistaABP.ViajePasajeros;


public class ViajePasajeroDto : AuditedEntityDto<Guid>
{

    public Guid IdPasajero { get; set; }
    public Guid IdViaje { get; set; }

}