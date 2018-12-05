import React from 'react';

export default (props) => {
    const S = props.shipment[0];
    return (
        (S) ?
            <div id='truckCONTAINER'>
                <p>Ambito: {S.AREA}</p>
                <p>Scale: {S.SCALE}</p>
                <p>Operational: {S.OPERATIONAL}</p>
                <p>Ambito Norm: {S.AREA_NORM}</p>
                <p>Scale Norm: {S.SCALE_NORM}</p>
                <p>Operational N2:  {S.OPERATIONAL_N2}</p>
                <p>Ambito regionalizado: {S.AREA_REG}</p>
                <p>Carrier Name: {S.CARRIER_NAME_SECT_3}</p>
                <p>Carrier id: {S.CARRIER_ID_SECT_3}</p>
            </div>
            :
            null
    )
}