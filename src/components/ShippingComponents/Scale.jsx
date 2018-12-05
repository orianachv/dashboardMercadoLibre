import React from 'react';

export default (props) => {
    const S = props.shipment[0];
    const NS = props.newShipment ? props.newShipment : null;
    return (
        (S) ?
            <div id='scaleCONTAINER'>
                <div className="containerShipping">
                    <div className="itemBill">
                        <p className={NS && (NS.WEIGHT_MELI != S.WEIGHT_MELI ? 'diferencia' : null)}>Peso Meli: {S.WEIGHT_MELI}</p>
                        <p className={NS && (NS.ALTURA_MELI != S.ALTURA_MELI ? 'diferencia' : null)}>Altura Meli: {S.ALTURA_MELI}</p>
                        <p className={NS && (NS.ALTURA_RSD != S.ALTURA_RSD ? 'diferencia' : null)}>Altura RSD: {S.ALTURA_RSD}</p>
                        <p className={NS && (NS.WEIGHT_RSD != S.WEIGHT_RSD ? 'diferencia' : null)}>Peso RSD: {S.WEIGHT_RSD}</p>
                        <p className={NS && (NS.ANCHO_MELI != S.ANCHO_MELI ? 'diferencia' : null)}>Ancho Meli: {S.ANCHO_MELI}</p>
                        <p className={NS && (NS.ANCHO_RSD != S.ANCHO_RSD ? 'diferencia' : null)}>Ancho RSD: {S.ANCHO_RSD}</p>
                        <p className={NS && (NS.WEIGHT_FACT != S.WEIGHT_FACT ? 'diferencia' : null)}>Peso Factura: {S.WEIGHT_FACT}</p>
                    </div>
                    <div className="itemBill">
                        <p className={NS && (NS.LARGO_MELI != S.LARGO_MELI ? 'diferencia' : null)}>Largo Meli: {S.LARGO_MELI}</p>
                        <p className={NS && (NS.LARGO_RSD != S.LARGO_RSD ? 'diferencia' : null)}>Largo RSD: {S.LARGO_RSD}</p>
                    </div>
                </div>
            </div>
            : null
    )
}