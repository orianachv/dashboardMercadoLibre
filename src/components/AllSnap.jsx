import React, { Component } from 'react';

export default props => (
  <div className="container">
    <table className="table table-hover" >
      <thead className="tableSnap">
        <tr >
          <th >Fecha</th>
          <th> Shipment</th>
          <th> Cargar Snapshot</th>
          <th> Eliminar</th>
        </tr>
      </thead>
      <tbody >
        {props.snapsArray &&
          props.snapsArray.map((elem) => {
            return (
              <tr key={elem.createdAt}  >
                <td> {elem.createdAt}</td>

                <td> {elem.objeto.track.data[0].SHIPMENT}</td>

                <td>
                  <button style={{ marginLeft: '2vw' }} className="btn btn-default" onClick={() => { props.fetchSavedShipment(elem); props.history.push('/') }}>
                    +
                </button>
                </td>
                <td>
                  <button className="btn btn-default" onClick={() => { props.deleteSnap(elem.id); props.getSnaps(sessionStorage.getItem('user')) }}>
                    -
                </button>
                </td>
              </tr>)
          })}
      </tbody>
    </table>
  </div>

);
