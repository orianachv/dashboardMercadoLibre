import React from 'react'

export default ({ shipment, newShipment }) => (
  (shipment) ?
    <div id="shipmentFlag" >
      <div>
        <p className={newShipment && (newShipment.FLAG_FACTURADO != shipment.FLAG_FACTURADO ? 'diferencia' : null)}>Facturado: {shipment.FLAG_FACTURADO}</p>
        <p className={newShipment && (newShipment.FLAG_CONCILIADO != shipment.FLAG_CONCILIADO ? 'diferencia' : null)}>Conciliado: {shipment.FLAG_CONCILIADO}</p>
        <p className={newShipment && (newShipment.FLAG_RETURN != shipment.FLAG_RETURN ? 'diferencia' : null)}>Flag return: {shipment.FLAG_RETURN}</p>
        <p className={newShipment && (newShipment.FLAG_CLAIM != shipment.FLAG_CLAIM ? 'diferencia' : null)}>Claim: {shipment.FLAG_CLAIM}</p>
        <p className={newShipment && (newShipment.FLAG_BPP != shipment.FLAG_BPP ? 'diferencia' : null)}>Bpp: {shipment.FLAG_BPP}</p>
        <p className={newShipment && (newShipment.SHIPMENT_RETURN != shipment.SHIPMENT_RETURN ? 'diferencia' : null)}>Shipment return: {shipment.SHIPMENT_RETURN}</p>
        <p className={newShipment && (newShipment.FREE_FLAG != shipment.FREE_FLAG ? 'diferencia' : null)}>Free: {shipment.FREE_FLAG}</p>
        <p className={newShipment && (newShipment.FREE_TYPE != shipment.FREE_TYPE ? 'diferencia' : null)}>Free type: {shipment.FREE_TYPE}</p>
      </div>
    </div> : null
)