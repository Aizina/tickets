import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchTickets} from '../store/ticketSlice';
import { EachFlight } from './EachFlight'; 
import { SortType, TicketInfo } from '../store/interfaces';
import { SortButtons } from './SortButtons';
import style from '../style/FlightSearch.module.scss'
import { Filters } from './Filters';

export const TicketsComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { tickets, loading, error } = useSelector((state: RootState) => state.tickets);
    const [sortType, setSortType] = useState<SortType>(SortType.CHEAPEST);
    const [visibleTickets, setVisibleTickets] = useState<number>(4);

    const allTickets = tickets.itineraries;
    const carriers = tickets.filterStats.carriers;
    const StopLabels = ['Без пересадки', '1 пересадка', '2 пересадки', '3 пересадки'];

    const [selectedCarriers, setSelectedCarriers] = useState<string[]>([]);
    const [selectedStops, setSelectedStops] = useState<number[]>([]);

    React.useEffect(() => {
        dispatch(fetchTickets());
    }, [dispatch]);

    const filterTickets = (allTickets : TicketInfo[]) => {
        return allTickets.filter((ticket) => {
            const carrierIncluded = selectedCarriers.length === 0 || selectedCarriers.includes(ticket.legs[0].carriers.marketing[0].name);
            const stopsIncluded = selectedStops.length === 0 || selectedStops.includes(ticket.legs[0].stopCount);
            return carrierIncluded && stopsIncluded;
        });
    };

    const sortTickets = (allTickets : TicketInfo[]) => {
        return allTickets.sort((a, b) => {
            switch (sortType) {
                case SortType.CHEAPEST:
                    return a.price.raw - b.price.raw;
                case SortType.FASTEST:
                    return a.legs[0].durationInMinutes - b.legs[0].durationInMinutes;
                case SortType.OPTIMAL:
                    const aScore = a.price.raw / a.legs[0].durationInMinutes;
                    const bScore = b.price.raw / b.legs[0].durationInMinutes;
                    return aScore - bScore;
                default:
                    return 0;
            }
        });
    };
    const loadMoreTickets = () => {
        setVisibleTickets((prev) => prev + 4); 
    };
    const displayedTickets = sortTickets(filterTickets([...allTickets])).slice(0, visibleTickets);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={style.flightSearchWrapper}>
            <div className={style.sortButtonsWrapper}>
                <SortButtons sortType={sortType} setSortType={setSortType} /> 
            </div>
            <div  className={style.filtersWrapper}>
                <Filters
                    carriers={carriers} selectedCarriers={selectedCarriers} setSelectedCarriers={setSelectedCarriers}
                    StopLabels={StopLabels} selectedStops={selectedStops} setSelectedStops={setSelectedStops}/>
            </div>           

            <div className={style.displayedTicketsWrapper}>
                {tickets === null ? (
                    <p>No tickets available.</p>
                ) : (
                    <ul>
                        {displayedTickets.map((ticket: TicketInfo) => (
                            <EachFlight key={ticket.legs[0].id} ticket={ticket} />
                        ))}
                    </ul>
                )}
                {visibleTickets < allTickets.length && ( 
                    <button onClick={loadMoreTickets} className={style.loadMoreBtn}>Загрузить еще билеты</button>
                )}
            </div>
        </div>
    );
};

