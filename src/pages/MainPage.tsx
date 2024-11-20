import React from 'react';
import { TicketsComponent }from '../components/FlightSearch';
import { Header } from '../components/Header';
import style from '../style/MainPage.module.scss';

export const MainPage: React.FC = () => {
  return (
    <div className={style.mainWrap}>
        <Header />
        <TicketsComponent />
    </div>
  )
}


