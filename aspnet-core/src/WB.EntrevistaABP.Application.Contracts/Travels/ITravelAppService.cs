using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using WB.EntrevistaABP.Travels;

namespace WB.EntrevistaABP.Travels;

public interface ITravelAppService :
    ICrudAppService< //Defines CRUD methods
        TravelDto, //Used to show books
        Guid, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateUpdateTravelDto> //Used to create/update a book
{

}