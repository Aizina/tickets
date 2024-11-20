import React from "react";
import { StopsFilterProps } from '../store/interfaces';
import style from '../style/StopsFilter.module.scss';


export const StopsFilter: React.FC <StopsFilterProps>= ({StopLabels, selectedStops, setSelectedStops}) => {
    
    const handleStopChange = (stopCount : number) => {
        setSelectedStops(prev =>
            prev.includes(stopCount) 
            ?prev.filter(s => s !== stopCount) 
            :[...prev, stopCount]
        )
    }

    return (
        <div className={style.stopsFilterWrap}>
            <h3 className={style.stopsFilterTitle}>Количество пересадок</h3>
            {StopLabels.map((label) => (
                <div key = {StopLabels.indexOf(label)} className={style.stopsDiv}>
                    <label className={style.checkboxLabel}>
                        <input 
                            type='checkbox'
                            value={label}
                            checked={selectedStops.includes(StopLabels.indexOf(label))}
                            onChange={() => handleStopChange(StopLabels.indexOf(label))} />
                            <span className={style.checkboxCustom}></span>
                            {label}
                    </label>
                </div>
            ))}
        </div>  
    )
}