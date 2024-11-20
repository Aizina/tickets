import React from "react";
import { CarrierFilterProps } from '../store/interfaces';
import style from '../style/CarrierFilter.module.scss';


export const CarrierFilter: React.FC <CarrierFilterProps>= ({carriers, selectedCarriers, setSelectedCarriers}) => {
    
    const handleCarrierChange = (carrierName : string) => {
        setSelectedCarriers(prev => 
            prev.includes(carrierName) 
                ?prev.filter(c => c !== carrierName)
                :[...prev, carrierName]
        );
    };

    return (
        <div className={style.carrierFilterWrap}>
            <h3 className={style.carrierFilterTitle}>Компании</h3>
            {carriers.map((carrier) => (
                <div key = {carrier.id} className={style.carriersDiv}>
                    <label className={style.checkboxLabel}>
                        <input 
                            type='checkbox'
                            value={carrier.name}
                            checked={selectedCarriers.includes(carrier.name)}
                            onChange={() => handleCarrierChange(carrier.name)} />
                            <span className={style.checkboxCustom}></span>
                            {carrier.name}
                    </label>
                </div>
            ))}
        </div>  
    )
}