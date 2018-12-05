import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <label className="dropdown">
    <div className="dd-button">
    </div>

    <input type="checkbox" className="dd-input" id="test" />

    <ul className="dd-menu">
      <li className="ddLink"><Link onClick={() => { props.getSnaps(sessionStorage.getItem('user')) }} to="/verSnaps" >Ver Snaps</Link></li>
      <li className="ddLink"><Link onClick={() => { props.getFavs(sessionStorage.getItem('user')) }} to="/verFavs" >Ver Favoritos</Link></li>
      <li className="divider"></li>
    </ul>
  </label>
)