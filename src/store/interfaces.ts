export interface TicketInfo {
    legs: [
        {
           arrival: string,
           carriers: {
               marketing: [
                   {
                       logoUrl: string,
                       name: string,
                   }]

           },
           departure: string,
           destination: {
               city: string,
               country: string,
               displayCode: string,
           },
           durationInMinutes: number,
           id: string,
           origin: {
               city: string,
               country: string, 
               displayCode: string,
           },
           stopCount: number,
       }
   ]
   price: {
       raw: number,
   }
}

export interface CarrierInfo {
    id: number,
    logoUrl: string,
    name: string
}
export interface Ticket {
    filterStats: {
        carriers: CarrierInfo[],
    },
    itineraries: TicketInfo[],
}

export interface TicketState {
    tickets: Ticket;
    loading: boolean;
    error: string | null;
}

export const initialTicketState: Ticket = {
    filterStats: {
        carriers: [],
    },
    itineraries: [],
}

export const initialState: TicketState = {
    tickets: initialTicketState,
    loading: false,
    error: null,
};

export enum SortType {
    CHEAPEST = 'cheapest',
    FASTEST = 'fastest',
    OPTIMAL = 'optimal',
}

export interface SortButtonsProps {
    sortType: SortType;
    setSortType: React.Dispatch<React.SetStateAction<SortType>>;
}

export interface CarrierFilterProps {
    carriers: CarrierInfo[];
    selectedCarriers: string[];
    setSelectedCarriers: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface StopsFilterProps {
    StopLabels: string[];
    selectedStops: number[];
    setSelectedStops: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface FiltersProps {
    carriers: CarrierInfo[];
    selectedCarriers: string[];
    setSelectedCarriers: React.Dispatch<React.SetStateAction<string[]>>;
    StopLabels: string[];
    selectedStops: number[];
    setSelectedStops: React.Dispatch<React.SetStateAction<number[]>>;
}