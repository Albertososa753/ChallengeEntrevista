using System;
using System.ComponentModel.DataAnnotations;

namespace WB.EntrevistaABP.ViajePasajeros;

public class CreateUpdateViajePasajeroDto
{
    [Required]
    public Guid IdPasajero { get; set; }

    [Required]
    public Guid IdViaje { get; set; }
}