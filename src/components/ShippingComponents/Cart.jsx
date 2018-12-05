import React from 'react'

export default ({ shipment, newShipment }) => (
  (shipment) ?
    <div id="cart">
      <div>
        <p className={newShipment && (newShipment.SOURCE != shipment.SOURCE ? 'diferencia' : null)}>Source: {shipment.SOURCE}</p>
        <p className={newShipment && (newShipment.CARRITO_FLAG != shipment.CARRITO_FLAG ? 'diferencia' : null)}>Carrito: {shipment.CARRITO_FLAG}</p>
        <p className={newShipment && (newShipment.PURCHASE != shipment.PURCHASE ? 'diferencia' : null)}>Purchase: {shipment.PURCHASE ? shipment.PURCHASE : 'shipment.PURCHASE'}</p>
        <p className={newShipment && (newShipment.PACKAGE != shipment.PACKAGE ? 'diferencia' : null)}>Package: {shipment.PACKAGE ? shipment.PACKAGE : 'shipment.PACKAGE'}</p>
      </div>
    </div> : null
)