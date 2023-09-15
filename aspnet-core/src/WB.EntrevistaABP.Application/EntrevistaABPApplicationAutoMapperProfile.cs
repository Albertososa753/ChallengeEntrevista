using AutoMapper;
using WB.EntrevistaABP.Passengers;
using WB.EntrevistaABP.Travels;
using WB.EntrevistaABP.ViajePasajeros;

namespace WB.EntrevistaABP;

public class EntrevistaABPApplicationAutoMapperProfile : Profile
{
    public EntrevistaABPApplicationAutoMapperProfile()
    {
        CreateMap<Travel, TravelDto>();
        CreateMap<CreateUpdateTravelDto, Travel>();
        CreateMap<Passenger, PassengerDto>();
        CreateMap<CreateUpdatePassengerDto, Passenger>();
        CreateMap<ViajePasajero, ViajePasajeroDto>();
        CreateMap<CreateUpdateViajePasajeroDto, ViajePasajero>();
    }
}
