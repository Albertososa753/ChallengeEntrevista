


using System;
using Volo.Abp.Application.Dtos;

namespace WB.EntrevistaABP.Passengers;

public class PassengerDto :AuditedEntityDto<Guid>

{
    public string Name { get; set;}
    public string Surname { get; set;}
    public int DNI { get; set;}
    public DateTime DateBirth { get; set;}


    

}