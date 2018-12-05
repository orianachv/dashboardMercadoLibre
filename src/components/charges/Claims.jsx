import React from "react"

export default ({ charges, newCharges }) => (
  (charges) ?
    <div id="claimContainer">
      <h4>Claims / BPP</h4>
      <div className="claim">
        <p className={newCharges && (newCharges.FLAG_CLAIM != charges.FLAG_CLAIM ? 'diferencia' : null)}>
          Claim: {charges.FLAG_CLAIM}</p>
        <p className={newCharges && (newCharges.CLAIM_STATUS != charges.CLAIM_STATUS ? 'diferencia' : null)}>
          Claim Status: {charges.CLAIM_STATUS}</p>
        <p className={newCharges && (newCharges.CLAIM_SUBSTATUS != charges.CLAIM_SUBSTATUS ? 'diferencia' : null)}>
          Claim SubStatus: {charges.CLAIM_SUBSTATUS}</p>
        <p className={newCharges && (newCharges.FLAG_BPP != charges.FLAG_BPP ? 'diferencia' : null)}>
          BPP: {charges.FLAG_BPP}</p>
        <p className={newCharges && (newCharges.BPP_STATUS != charges.BPP_STATUS ? 'diferencia' : null)}>
          BPP Status: {charges.BPP_STATUS}</p>
        <p className={newCharges && (newCharges.STATUS_BPP_HADOUKEN != charges.STATUS_BPP_HADOUKEN ? 'diferencia' : null)}>
          BPP Status Hadouken: {charges.STATUS_BPP_HADOUKEN}</p>
        <p className={newCharges && (newCharges.BPP_AMOUNT != charges.BPP_AMOUNT ? 'diferencia' : null)}>
          BPP Amount: {charges.BPP_AMOUNT}</p>
        <p className={newCharges && (newCharges.BPP_HADOUKEN_PAID != charges.BPP_HADOUKEN_PAID ? 'diferencia' : null)}>
          BPP Hadouken Amount: {charges.BPP_HADOUKEN_PAID}</p>
      </div>
      <div className="claim">
        <p className={newCharges && (newCharges.SAP_REGISTRACION != charges.SAP_REGISTRACION ? 'diferencia' : null)}>
          SAP ID Registración: {charges.SAP_REGISTRACION}</p>
        <p className={newCharges && (newCharges.SAP_FACTURACION != charges.SAP_FACTURACION ? 'diferencia' : null)}>
          SAP ID Facturación: {charges.SAP_FACTURACION}</p>
        <p className={newCharges && (newCharges.FECHA_REG_SAP != charges.FECHA_REG_SAP ? 'diferencia' : null)}>
          Fecha Registración SAP: {charges.FECHA_REG_SAP}</p>
      </div>
    </div> : null
)