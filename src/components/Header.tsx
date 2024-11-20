import React from "react";
import style from '../style/Header.module.scss';

export const Header: React.FC = () => {
    return (
        <div className={style.headerWrapper}>
            <img src="/img/flightIcon.png" alt="Flight Icon" className={style.headerIcon} />
            <h2>Поиск авиабилетов</h2>
        </div>
    )
}