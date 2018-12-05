import React from 'react';

export default props => (
  <div className="container" id="containerTracking">
    {props.indiceInicial > 0 && (
      <div className="botonesTracking">
        <div>
          <img
            src="/images/FlechaLeft.png"
            className="imgTracking"
            onClick={props.handleClickLeft}
          />
        </div>
      </div>
    )}
    {props.trackings &&
      props.trackings.map((tracking, i) => {
        return (
          <div className="columnTracking" key={i}>
            <div className="tituloTrackin">
              <strong>
                Section: {tracking.SECTION} - Carrier Cost (LC): $
                {tracking.COSTO}
              </strong>
            </div>
            <div id="contenidoTracking">
              <p className={props.newTrackings && (props.newTrackings[i].TRACKING != tracking.TRACKING ? 'diferencia' : null)}>Tracking Number: {tracking.TRACKING}</p>
              <p className={props.newTrackings && (props.newTrackings[i].BILL_DATE != tracking.BILL_DATE ? 'diferencia' : null)}>Bill Date: {tracking.BILL_DATE}</p>
              <p className={props.newTrackings && (props.newTrackings[i].CARRIER != tracking.CARRIER ? 'diferencia' : null)}>Carrie : {tracking.CARRIER}</p>
              <p className={props.newTrackings && (props.newTrackings[i].SERVICE_NAME != tracking.SERVICE_NAME ? 'diferencia' : null)}>
                Service: {tracking.SERVICE_NAME} ({tracking.SERVICE_ID})
              </p>
              <p className={props.newTrackings && (props.newTrackings[i].AMBITO != tracking.AMBITO ? 'diferencia' : null)}>Ambito: {tracking.AMBITO}</p>
              <p className={props.newTrackings && (props.newTrackings[i].AMBITO_NORM != tracking.AMBITO_NORM ? 'diferencia' : null)}>Ambito Norm: {tracking.AMBITO_NORM}</p>
              <p className={props.newTrackings && (props.newTrackings[i].AMBITO_REG != tracking.AMBITO_REG ? 'diferencia' : null)}>Ambito Reg: {tracking.AMBITO_REG}</p>
              <p className={props.newTrackings && (props.newTrackings[i].OPERATIONAL != tracking.OPERATIONAL ? 'diferencia' : null)}> Operational: {tracking.OPERATIONAL}</p>
              <p className={props.newTrackings && (props.newTrackings[i].SCALE != tracking.SCALE ? 'diferencia' : null)}>Scale N2: {tracking.SCALE}</p>
              <p className={props.newTrackings && (props.newTrackings[i].SCALE_NORM != tracking.SCALE_NORM ? 'diferencia' : null)}>Scale N2 Norm: {tracking.SCALE_NORM}</p>
              <p className={props.newTrackings && (props.newTrackings[i].BILL_NUMBER != tracking.BILL_NUMBER ? 'diferencia' : null)}>Nro. Factura: {tracking.BILL_NUMBER}</p>
              <p className={props.newTrackings && (props.newTrackings[i].PROCESS_KEY != tracking.PROCESS_KEY ? 'diferencia' : null)}>Process Key: {tracking.PROCESS_KEY}</p>
            </div>
          </div>
        );
      })}
    <div className="botonesTracking">
      {props.trackingsCompleto.TRACKING &&
        props.indiceFinal < props.trackingsCompleto.TRACKING.length && (
          <div>
            <img
              src="/images/Flecha.png"
              className="imgTracking"
              onClick={props.handleClickRight}
            />
          </div>
        )}
    </div>
    <div style={{ marginTop: '1%', border: '3% white solid' }}>
      <strong>
        {props.trackingsCompleto.TRACKING
          ? props.indiceFinal < props.trackingsCompleto.TRACKING.length
            ? `Trackings: ${props.indiceFinal} / ${
            props.trackingsCompleto.TRACKING.length
            }`
            : `Trackings: ${props.trackingsCompleto.TRACKING.length} / ${
            props.trackingsCompleto.TRACKING.length
            }`
          : null}
      </strong>
    </div>
  </div>
);
