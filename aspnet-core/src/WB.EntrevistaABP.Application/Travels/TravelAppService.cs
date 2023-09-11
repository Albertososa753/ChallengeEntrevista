using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using WB.EntrevistaABP.Travels;


namespace WB.EntrevistaABP.Travels;

public class TravelAppService :
    CrudAppService<
        Travel, //The Book entity
        TravelDto, //Used to show books
        Guid, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateUpdateTravelDto>, //Used to create/update a book
    ITravelAppService //implement the IBookAppService
{
    public TravelAppService(IRepository<Travel, Guid> repository)
        : base(repository)
    {

    }
}