import React from 'react'

export default ({ charges, newCharges, handleClickRight, handleClickLeft, currentChargeMktpl, currentChargeShp, currentBonusShp, sum }) => (
  (charges) ?
    <div id="orderContainer">
      <h4>Charges Shipping</h4>
      <div id="orderUlt">
        <div id="ult">
          <p className="orderTitle">Neto cargos SHP: {sum(charges.CHARGES_SHP, "CHARGE_AMT_SHP") - sum(charges.BONUS_SHP, "BONUS_AMT_SHP")}</p>
          <p className={newCharges && (newCharges.ULT_CHARGE_AMT_SHP != charges.ULT_CHARGE_AMT_SHP ? 'diferencia' : null)}>Monto último cargo Shp: {charges.ULT_CHARGE_AMT_SHP}</p>
          <p className={newCharges && (newCharges.ULT_CHARGE_ID_SHP != charges.ULT_CHARGE_ID_SHP ? 'diferencia' : null)}>Id último cargo Shp: {charges.ULT_CHARGE_ID_SHP}</p>
          <p className={newCharges && (newCharges.ULT_CHARGE_DATE_SHP != charges.ULT_CHARGE_DATE_SHP ? 'diferencia' : null)}>Fecha último cargo Shp: {charges.ULT_CHARGE_DATE_SHP}</p>
          <p className={newCharges && (newCharges.ULT_BONUS_AMT_SHP != charges.ULT_BONUS_AMT_SHP ? 'diferencia' : null)}>Monto última bonif Shp: {charges.ULT_BONUS_AMT_SHP}</p>
          <p className={newCharges && (newCharges.ULT_BONUS_ID_SHP != charges.ULT_BONUS_ID_SHP ? 'diferencia' : null)}>Id última bonif Shp: {charges.ULT_BONUS_ID_SHP}</p>
          <p className={newCharges && (newCharges.ULT_BONUS_DATE_SHP != charges.ULT_BONUS_DATE_SHP ? 'diferencia' : null)}>Fecha última bonif Shp: {charges.ULT_BONUS_DATE_SHP}</p>
        </div>

      </div>
      <div id="orderDetail">
        <div id="shp">
          <div className="shpChargeBonus">
            <p className="orderTitle">Charge SHP: {`${currentChargeShp + 1} / ${charges.CHARGES_SHP.length}`}</p>
            <p className={newCharges && (newCharges.CHARGES_SHP[`${currentChargeShp}`].CHARGE_DATE_SHP != charges.CHARGES_SHP[`${currentChargeShp}`].CHARGE_DATE_SHP ? 'diferencia' : null)}>
              Charge date Shp: {charges.CHARGES_SHP[`${currentChargeShp}`].CHARGE_DATE_SHP}</p>
            <p className={newCharges && (newCharges.CHARGES_SHP[`${currentChargeShp}`].CHARGE_ID_SHP != charges.CHARGES_SHP[`${currentChargeShp}`].CHARGE_ID_SHP ? 'diferencia' : null)}>
              Charge Id Shp: {charges.CHARGES_SHP[`${currentChargeShp}`].CHARGE_ID_SHP}</p>
            <p className={newCharges && (newCharges.CHARGES_SHP[`${currentChargeShp}`].CHARGE_AMT_SHP != charges.CHARGES_SHP[`${currentChargeShp}`].CHARGE_AMT_SHP ? 'diferencia' : null)}>
              Charge amount Shp: {charges.CHARGES_SHP[`${currentChargeShp}`].CHARGE_AMT_SHP}</p>
            <div>
              <button disabled={(!currentChargeShp)} style={(!currentChargeShp) ? { backgroundColor: "grey" } : null} className="buttonDetails" onClick={() => handleClickLeft("SHP")}>Anterior</button>
              <button disabled={!(currentChargeShp < charges.CHARGES_SHP.length - 1)}
                style={(!(currentChargeShp < charges.CHARGES_SHP.length - 1)) ? { backgroundColor: "grey" } : null}
                className="buttonDetails" onClick={() => handleClickRight("SHP")}>Siguiente</button>
            </div>
          </div>
          <div className="shpChargeBonus">
            <p className="orderTitle">Bonus SHP: {`${currentBonusShp + 1} / ${charges.BONUS_SHP.length}`}</p>
            <p className={newCharges && (newCharges.BONUS_SHP[`${currentBonusShp}`].BONUS_DATE_SHP != charges.BONUS_SHP[`${currentBonusShp}`].BONUS_DATE_SHP ? 'diferencia' : null)}>
              Bonus date Shp: {charges.BONUS_SHP[`${currentBonusShp}`].BONUS_DATE_SHP}</p>
            <p className={newCharges && (newCharges.BONUS_SHP[`${currentBonusShp}`].BONUS_ID_SHP != charges.BONUS_SHP[`${currentBonusShp}`].BONUS_ID_SHP ? 'diferencia' : null)}>
              Bonus Id Shp: {charges.BONUS_SHP[`${currentBonusShp}`].BONUS_ID_SHP}</p>
            <p className={newCharges && (newCharges.BONUS_SHP[`${currentBonusShp}`].BONUS_AMT_SHP != charges.BONUS_SHP[`${currentBonusShp}`].BONUS_AMT_SHP ? 'diferencia' : null)}>
              Bonus amount Shp: {charges.BONUS_SHP[`${currentBonusShp}`].BONUS_AMT_SHP}</p>
            <div>
              <button className={(!currentBonusShp)?"btn-disabled":"buttonDetails"}
              onClick={()=>handleClickLeft("BONUS")}>Anterior</button>
              <button className={(!(currentBonusShp < charges.BONUS_SHP.length-1))?"btn-disabled":"buttonDetails"}
              onClick={()=>handleClickRight("BONUS")}>Siguiente</button>
          </div>   
          </div>
        </div>
        <p className="orderTitle" style={{ paddingLeft: "1.7em" }}>MKTPL: {`${currentChargeMktpl + 1} / ${charges.ORDERS.length}`}</p>
        <div id="chargeMktpl">
          <div className="mktpl">
            <p className={newCharges && (newCharges.ORDERS[`${currentChargeMktpl}`].ORDER_ID != charges.ORDERS[`${currentChargeMktpl}`].ORDER_ID ? 'diferencia' : null)}>
              Charge Id Mktpl: {charges.ORDERS[`${currentChargeMktpl}`].ORDER_ID}</p>
            <p className={newCharges && (newCharges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].CHARGE_DATE_MKTPL != charges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].CHARGE_DATE_MKTPL ? 'diferencia' : null)}>
              Charge date Mktpl: {charges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].CHARGE_DATE_MKTPL}</p>
            <p className={newCharges && (newCharges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].CHARGE_AMT_MKTPL != charges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].CHARGE_AMT_MKTPL ? 'diferencia' : null)}>
              Charge amount Mktpl: {charges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].CHARGE_AMT_MKTPL}</p>
          </div>
          <div className="mktpl">
            <p className={newCharges && (newCharges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].BONUS_DATE_MKTPL != charges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].BONUS_DATE_MKTPL ? 'diferencia' : null)}>
              Bonus date Mktpl: {charges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].BONUS_DATE_MKTPL}</p>
            <p className={newCharges && (newCharges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].BONUS_ID_MKTPL != charges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].BONUS_ID_MKTPL ? 'diferencia' : null)}>
              Bonus Id Mktpl: {charges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].BONUS_ID_MKTPL}</p>
            <p className={newCharges && (newCharges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].BONUS_AMT_MKTPL != charges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].BONUS_AMT_MKTPL ? 'diferencia' : null)}>
              Bonus amount Mktpl: {charges.ORDERS[`${currentChargeMktpl}`].CHARGE_ORDER[0].BONUS_AMT_MKTPL}</p>
          </div>
        </div>
        <div style={{marginLeft:"1.7em"}}>
          <button className={(!currentChargeMktpl)?"btn-disabled":"buttonDetails"}
          onClick={()=>handleClickLeft("MKTPL")}>Anterior</button>
          <button className={(!(currentChargeMktpl < charges.ORDERS.length-1))?"btn-disabled":"buttonDetails"}
          onClick={()=>handleClickRight("MKTPL")}>Siguiente</button>
        </div>
      </div>
    </div> : null

)