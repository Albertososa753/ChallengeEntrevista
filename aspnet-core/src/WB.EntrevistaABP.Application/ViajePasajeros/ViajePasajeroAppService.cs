using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;


namespace WB.EntrevistaABP.ViajePasajeros;

public class ViajePasajeroAppService :
    CrudAppService<
        ViajePasajero, //The Book entity
        ViajePasajeroDto, //Used to show books
        Guid, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateUpdateViajePasajeroDto>, //Used to create/update a book
    IViajePasajeroAppService //implement the IBookAppService
{
    public ViajePasajeroAppService(IRepository<ViajePasajero, Guid> repository)
        : base(repository)
    {

    }
}