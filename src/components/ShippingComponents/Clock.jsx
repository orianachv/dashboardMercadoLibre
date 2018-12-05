import React from 'react'

export default ({ shipment, newShipment }) => (
  (shipment) ?
    <div id="clock" >
      <p className={newShipment && (newShipment.DATE_CREATED != shipment.DATE_CREATED ? 'diferencia' : null)}>Date Created: {shipment.DATE_CREATED}</p>
      <p className={newShipment && (newShipment.DATE_HANDLING != shipment.DATE_HANDLING ? 'diferencia' : null)}>Date Handling: {shipment.DATE_HANDLING}</p>
      <p className={newShipment && (newShipment.DATE_SHIPPED != shipment.DATE_SHIPPED ? 'diferencia' : null)} >Date Shipped: {shipment.DATE_SHIPPED}</p>
      <p className={newShipment && (newShipment.DATE_DELIVERED != shipment.DATE_DELIVERED ? 'diferencia' : null)}>Date Delivered: {shipment.DATE_DELIVERED}</p>
      <p className={newShipment && (newShipment.DATE_CANCELLED != shipment.DATE_CANCELLED ? 'diferencia' : null)}>Date Cancelled: {shipment.DATE_CANCELLED}</p>
      <p className={newShipment && (newShipment.DATE_NOT_DELIVERED != shipment.DATE_NOT_DELIVERED ? 'diferencia' : null)}>Date Not Deliv: {shipment.DATE_NOT_DELIVERED}</p>
      <p className={newShipment && (newShipment.DATE_FIRST_VISIT != shipment.DATE_FIRST_VISIT ? 'diferencia' : null)}>Date First Visit: {shipment.DATE_FIRST_VISIT}</p>
      <p className={newShipment && (newShipment.DATE_RETURNED != shipment.DATE_RETURNED ? 'diferencia' : null)}>Date Returned: {shipment.DATE_RETURNED}</p>
      <p className={newShipment && (newShipment.BILL_DATE != shipment.BILL_DATE ? 'diferencia' : null)}>Date Bill: {shipment.BILL_DATE}</p>
    </div> : null
)