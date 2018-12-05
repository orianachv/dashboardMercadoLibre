import React, { Component } from 'react';
import Dropdown from './Dropdown'
import Alert from '../components/Alert'
export default class Navbar extends React.Component {
  render() {
    const { saveFav, saveSnap, getFavs, getItem, getSnaps, history, shpId, emptyState } = this.props
    return (
      <div className="navBar">
        <div className="logo">
          <img src="/images/ml_logo.png" />
        </div>
        <div className="logo">
          <h3>Signs BackOffice Manager</h3>
        </div>
        <div id="contButtons">
          {this.props.id != 0 ? <button id="btnSnap" onClick={() => { saveSnap(shpId); if (this._alert) { this._alert.alert('Snapshot creada') } }} ><img id="btnImg" src="/images/cam.png" /></button> : ""}
          {this.props.id != 0 ? <button id="btnFav" onClick={() => { saveFav(sessionStorage.getItem('user')); if (this._alert) { this._alert.alert('Favorito agregado') } }} ><img id="btnImg2" src="/images/favoritos.png" /></button> : ""}
          <Dropdown getSnaps={getSnaps} getFavs={getFavs} />
          <div id="logout">
            <button onClick={() => { sessionStorage.removeItem('user'); emptyState(); history.push('/login'); }}>
              <img src="/images/logout.png" /> Cerrar Sesión
          </button>
          </div>
        </div>
        <Alert viewSaved={this.props.viewSaved} ref={instance => this._alert = instance} />
      </div>
    )
  }
}
