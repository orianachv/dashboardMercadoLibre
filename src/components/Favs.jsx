import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <div className="container">
        <table className="table table-hover" >
            <thead className="tableSnap">
                <tr >
                    <th> Fecha</th>
                    <th> Shipment</th>
                    <th> Cargar Favorito</th>
                    <th> Eliminar</th>
                </tr>
            </thead>
            <tbody >
                {props.favsArray &&
                    props.favsArray.map((elem) => {
                        return (
                            <tr key={elem.createdAt}  >
                                <td> {elem.createdAt}</td>

                                <td> {elem.shipment}</td>

                                <td>
                                    <button style={{ marginLeft: '2vw' }} className="btn btn-default" onClick={() => { props.fetchShipment(elem.shipment); props.history.push('/') }}>
                                        +
                </button>
                                </td>
                                <td>
                                    <button className="btn btn-default" onClick={() => { props.deleteFav(elem.id); props.getFavs(sessionStorage.getItem('user')) }}>
                                        -
                </button>
                                </td>
                            </tr>)
                    })}
            </tbody>
        </table>
    </div>

);
