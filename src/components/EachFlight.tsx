import {  TicketInfo } from '../store/interfaces';
import style from '../style/EachFlight.module.scss'
import { formatMinutesToHoursAndMinutes, formatToTimeOnly } from '../utils/timeFormat';

export const EachFlight = ({ ticket }: { ticket: TicketInfo })  => {
    return (
      <div className={style.eachStyleWrapper}>
        <div className={style.mainInfoWrapper}>
            <h1>{Math.round(ticket.price.raw)} P</h1>
            <img src={ticket.legs[0].carriers?.marketing[0]?.logoUrl} alt={ticket.legs[0].carriers.marketing[0].name} />
        </div>
        <div className={style.mainInfoWrapper}>
            <div className={style.eachInfoDiv}>
                <p className={style.eachInfoHeaders}>{ticket.legs[0].origin.displayCode} - {ticket.legs[0].destination.displayCode}</p>
                <p className={style.eachInfoDescriptions}> {formatToTimeOnly(ticket.legs[0].departure)} - {formatToTimeOnly(ticket.legs[0].arrival)}</p>
            </div>
            <div className={style.eachInfoDiv}>
                <p className={style.eachInfoHeaders}>В пути</p>
                <p className={style.eachInfoDescriptions}>{formatMinutesToHoursAndMinutes(ticket.legs[0].durationInMinutes)}</p>
            </div>
            <div className={style.eachInfoDiv}>
                <p className={style.eachInfoHeaders}>Пересадки</p>
                <p className={style.eachInfoDescriptions}>{ticket.legs[0].stopCount}</p>
            </div>
        </div>
      </div>            
    )
}