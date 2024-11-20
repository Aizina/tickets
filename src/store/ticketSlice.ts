import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {initialState, TicketState, Ticket} from './interfaces'

const API_KEY = '0633057d58mshe52bad7568f431bp1ff453jsn40666d9af616';
const API_HOST = 'sky-scrapper.p.rapidapi.com';
const URL = 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights?originSkyId=LOND&destinationSkyId=NYCA&originEntityId=27544008&destinationEntityId=27537542&date=2025-02-01&cabinClass=economy&adults=1&sortBy=best&limit=80&currency=RUB';

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async (_, { }) => {
        try {
            const response = await fetch(
                URL,
                {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': API_KEY,
                        'X-RapidAPI-Host': API_HOST
                    }
                }
            );
            
            if (!response.ok) {
                throw new Error('Failed to fetch tickets');
            }

            const data = await response.json();
            console.log(data);
            return data.data;
        } catch (error) {
            return console.log('ERROR FETCHING');
        }
    }
);


const ticketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder
            .addCase(fetchTickets.pending, (state: TicketState) => {
                state.loading = true;
            })
            .addCase(fetchTickets.fulfilled, (state: TicketState, action: PayloadAction<Ticket>) => {
                state.loading = false;
                state.tickets = action.payload;
            })
            .addCase(fetchTickets.rejected, (state: TicketState) => {
                state.loading = false;
                state.error = 'Failed to fetch tickets';
            });
    },
});

export default ticketSlice.reducer;
