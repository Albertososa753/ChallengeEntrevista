using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;


namespace WB.EntrevistaABP.Passengers;

public class PassengerAppService :
    CrudAppService<
        Passenger, //The Book entity
        PassengerDto, //Used to show books
        Guid, //Primary key of the book entity
        PagedAndSortedResultRequestDto, //Used for paging/sorting
        CreateUpdatePassengerDto>, //Used to create/update a book
    IPassengerAppService //implement the IBookAppService
{
    public PassengerAppService(IRepository<Passenger, Guid> repository)
        : base(repository)
    {

    }
}