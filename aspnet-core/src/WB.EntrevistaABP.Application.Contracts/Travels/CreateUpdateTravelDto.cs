using System;
using System.ComponentModel.DataAnnotations;
using WB.EntrevistaABP.Transportes;

namespace WB.EntrevistaABP.Travels;

public class CreateUpdateTravelDto
{


    [Required]
    [DataType(DataType.Date)]
    public DateTime FechaSalida { get; set; }

    [Required]
    [DataType(DataType.Date)]
    public DateTime FechaLlegada { get; set; }

    [Required]
    public string Origen { get; set; }

    [Required]
    public string Destino { get; set; }

    [Required]
    public Transporte MedioTransporte { get; set; }
}