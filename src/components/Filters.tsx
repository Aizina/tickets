import React, { useState} from 'react';
import { CarrierFilter } from './CarrierFilter';
import { StopsFilter } from './StopsFilter';
import { FiltersProps } from '../store/interfaces';
import style from '../style/Filters.module.scss'

export const Filters: React.FC<FiltersProps> = ({ carriers, selectedCarriers, setSelectedCarriers,
                                                  StopLabels, selectedStops, setSelectedStops,}) => {
                                                    
    const [showFilters, setShowFilters] = useState(false);
    return (
        <div className={style.filtersWrap}>
            <div className={`${style.filtersDescriptionWrap} ${showFilters ? style.changeBorder : style.defaultBorder }`}>
                <div className={style.filtersDescriptionText}>
                    {selectedCarriers.length === 0  ? 
                    (<span> Любая авиакомпания, </span>)
                    : (<span>Авиакомпании: {selectedCarriers.join(', ')}, </span>)}
                    {selectedStops.length === 0  ? 
                    (<span>любое кол-во пересадок</span>)
                    : (<span>пересадки: {selectedStops.join(', ')}</span>)}
                </div> 
                <div onClick={() => setShowFilters(!showFilters)} className={style.filtersSettings}>
                    <span>Открыть настройки</span>
                    <img src='/img/downIcon.png' alt='Down Icon'/>
                </div>
            </div> 
          
           <div className={`${style.filtersContent} ${showFilters ? style.showOnSmallScreens : style.hideOnSmallScreens}`}>
                <div className={style.carrierFilterDiv}>
                  <CarrierFilter carriers={carriers} selectedCarriers={selectedCarriers} setSelectedCarriers={setSelectedCarriers}/>
                </div>
                <div className={style.stopsFilterDiv}>
                    <StopsFilter StopLabels={StopLabels} selectedStops={selectedStops} setSelectedStops={setSelectedStops}/>
                </div>
                
            </div> 
        </div>
    );
};
