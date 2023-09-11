using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using WB.EntrevistaABP.Passengers;

namespace WB.EntrevistaABP.Passengers;

public interface IPassengerAppService :
    ICrudAppService< //Defines CRUD methods
        PassengerDto, //Used to show books
        Guid, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateUpdatePassengerDto> //Used to create/update a book
{

}