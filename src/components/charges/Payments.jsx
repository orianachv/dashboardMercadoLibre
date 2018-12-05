import React from 'react'

export default ({ charges, newCharges, currentMovement,handleClickLeft,handleClickRight}) => (
  (charges) ?
    <div id="paymentContainer">
      <h4>Move / Payments</h4>
      <div className="Payment">
        <p className={newCharges && (newCharges.MOVEMENT[`${currentMovement}`].MOVE_ID != charges.MOVEMENT[`${currentMovement}`].MOVE_ID ? 'diferencia' : null)}>
          Move ID: {charges.MOVEMENT[`${currentMovement}`].MOVE_ID}</p>
        <p className={newCharges && (newCharges.MOVEMENT[`${currentMovement}`].MOVE_DATE != charges.MOVEMENT[`${currentMovement}`].MOVE_DATE ? 'diferencia' : null)}>
          Move Date: {charges.MOVEMENT[currentMovement].MOVE_DATE}</p>
      <div>
          <button className={(!currentMovement)?"btn-disabled":"buttonDetails"}
          onClick={()=>handleClickLeft("MOVEMENT")}>Anterior</button>
          <button className={(!(currentMovement < charges.MOVEMENT.length-1))?"btn-disabled":"buttonDetails"}
          onClick={()=>handleClickRight("MOVEMENT")}>Siguiente</button>
        </div>
      </div>
      {charges.PAYMENT.map((payment, i) => {
        return (
          <div key={i}>
            <div className="Payment">
              <p className={newCharges && (newCharges.PAYMENT[i].PAYMENT != payment.PAYMENT ? 'diferencia' : null)}>
                Payment Id: {payment.PAYMENT}</p>
              <p className={newCharges && (newCharges.PAYMENT[i].PAY_STATUS != payment.PAY_STATUS ? 'diferencia' : null)}>
                Status: {payment.PAY_STATUS}</p>
              <p className={newCharges && (newCharges.PAYMENT[i].PAY_DETAIL_CODE != payment.PAY_DETAIL_CODE ? 'diferencia' : null)}>
                Detail Code: {payment.PAY_DETAIL_CODE}</p>
              <p className={newCharges && (newCharges.PAYMENT[i].TPV != payment.TPV ? 'diferencia' : null)}>
                TPV (LC): {payment.TPV}</p>
            </div>
          </div>
        )
      })}
    </div>
    : null
)