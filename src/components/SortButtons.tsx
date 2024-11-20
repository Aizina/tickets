import React from "react";
import { SortType, SortButtonsProps } from '../store/interfaces';
import style from '../style/SortButtons.module.scss'
export const SortButtons: React.FC <SortButtonsProps>= ({sortType, setSortType}) => {

    return (
        <div className={style.sortButtonsWrapper}>
        <button
          onClick={() => setSortType(SortType.CHEAPEST)}
          className={sortType === SortType.CHEAPEST ? style.active : ''}
        >
          Самый дешевый
        </button>
        <button
          onClick={() => setSortType(SortType.FASTEST)}
          className={sortType === SortType.FASTEST ? style.active : ''}
        >
          Самый быстрый
        </button>
        <button
          onClick={() => setSortType(SortType.OPTIMAL)}
          className={sortType === SortType.OPTIMAL ? style.active : ''}
        >
          Самый оптимальный
        </button>
      </div>
    )
}