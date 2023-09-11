using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using WB.EntrevistaABP.ViajePasajeros;

namespace WB.EntrevistaABP.ViajePasajeros;

public interface IViajePasajeroAppService :
    ICrudAppService< //Defines CRUD methods
        ViajePasajeroDto, //Used to show books
        Guid, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateUpdateViajePasajeroDto> //Used to create/update a book
{

}