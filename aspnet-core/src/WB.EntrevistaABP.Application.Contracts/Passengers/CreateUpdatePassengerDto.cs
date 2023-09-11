using System;
using System.ComponentModel.DataAnnotations;

namespace WB.EntrevistaABP.Passengers;

public class CreateUpdatePassengerDto
{
    [Required]
    [StringLength(128)]
    public string Name { get; set; }

    [Required]
    [StringLength(128)]
    public string Surname { get; set; }

    [Required]
    public int DNI { get; set; }

    [Required]
    [DataType(DataType.Date)]
    public DateTime DateBirth { get; set; }



}