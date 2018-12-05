import React from 'react'

export default ({ shipment, newShipment }) => (
  (shipment) ?
    <div id="billeteContainer">
      <div className="containerShipping">
        <div className="itemBill">
          <p className={newShipment && (newShipment.QUANTITY != shipment.QUANTITY ? 'diferencia' : null)}>Quantity: {shipment.QUANTITY}</p>
          <p className={newShipment && (newShipment.ORDER_COST != shipment.ORDER_COST ? 'diferencia' : null)}>GMV: ${shipment.ORDER_COST}</p>
          <p className={newShipment && (newShipment.REAL_COST != shipment.REAL_COST ? 'diferencia' : null)}>Real Cost: ${shipment.REAL_COST}</p>
          <p className={newShipment && (newShipment.RULE_COST != shipment.RULE_COST ? 'diferencia' : null)}>Rule Cost: ${shipment.RULE_COST}</p>
          <p className={newShipment && (newShipment.COSTO != shipment.COSTO ? 'diferencia' : null)}>Costo Meli: ${shipment.COSTO}</p>
          <p className={newShipment && (newShipment.MANDATORY_IMP != shipment.MANDATORY_IMP ? 'diferencia' : null)}>Mandatory: ${shipment.MANDATORY_IMP}</p>
          <p className={newShipment && (newShipment.LOYALTY_IMP != shipment.LOYALTY_IMP ? 'diferencia' : null)}>Loyalty: ${shipment.LOYALTY_IMP}</p>
          <p className={newShipment && (newShipment.NORMAL_IMP != shipment.NORMAL_IMP ? 'diferencia' : null)}>Normal Discount: ${shipment.NORMAL_IMP}</p>
          <p className={newShipment && (newShipment.SPECIAL_IMP != shipment.SPECIAL_IMP ? 'diferencia' : null)}>Special Discount: ${shipment.SPECIAL_IMP}</p>
        </div>
        <div className="itemBill">
          <p className={newShipment && (newShipment.ROUNDING_IMP != shipment.ROUNDING_IMP ? 'diferencia' : null)}>Rounding Difference: ${shipment.ROUNDING_IMP}</p>
          <p className={newShipment && (newShipment.INVERSION != shipment.INVERSION ? 'diferencia' : null)}>Inversión S/Imp: ${shipment.INVERSION}</p>
          <p className={newShipment && (newShipment.REVENUE != shipment.REVENUE ? 'diferencia' : null)}>Revenue S/Imp: ${shipment.REVENUE}</p>
          <p className={newShipment && (newShipment.MARGEN != shipment.MARGEN ? 'diferencia' : null)}> Margen: {shipment.MARGEN}%</p>
        </div>
      </div>
    </div> : null
)