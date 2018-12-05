import Tracking from './Tracking';
import axios from 'axios';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { shipmentRoute, chargesRoute, trackingRoute, adressRoute } from '../../server/api-config'

//components
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import ChargesContainer from './ChargesContainer';
import Snaps from '../components/AllSnap';
import Favs from '../components/Favs';

//CONTAINERS
import ShippingContainer from './ShippingContainer';
import LoginContainer from './LoginContainer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipment: {},
      id: 0,
      savedShipment: {},
      viewSaved: false,
      snaps: [],
      favs: []
    };
    this.fetchShipment = this.fetchShipment.bind(this);
    this.fetchSavedShipment = this.fetchSavedShipment.bind(this);
    this.deleteSavedShipment = this.deleteSavedShipment.bind(this);
    this.saveSnap = this.saveSnap.bind(this);
    this.getSnaps = this.getSnaps.bind(this);
    this.deleteFav = this.deleteFav.bind(this);
    this.getFavs = this.getFavs.bind(this);
    this.saveFav = this.saveFav.bind(this);
    this.backToNew = this.backToNew.bind(this);
    this.emptyState = this.emptyState.bind(this);
  }
  componentDidMount() {
    var user = sessionStorage.getItem('user');
    if (user == null) {
      this.props.history.push('/login');
    }
  }
  fetchShipment(id) {
    axios.get(shipmentRoute + id).then(res => {
      this.setState({ shipment: res, id: id });
    });
  }
  fetchSavedShipment(selectedSnap) {
    this.setState({ savedShipment: selectedSnap, viewSaved: true })
  }
  deleteSavedShipment() {
    this.setState({ savedShipment: {}, viewSaved: false });
  }
  saveFav() {
    var sessionUser = sessionStorage.getItem('user');
    if (this.state.id != 0) {
      axios.post('/user/fav', { id: this.state.id, user: sessionUser })
    }
  }
  deleteFav(id) {
    axios.delete('/user/fav', { params: { id: id } })
  }
  saveSnap(id) {
    var sessionUser = sessionStorage.getItem('user');
    var objeto = {
      shipment: {
        data: {}
      },
      charg: {
        data: {}
      },
      track: {
        data: {}
      },
      adress: {
        data: {}
      }
    };
    axios.get(shipmentRoute + id)
      .then((res) => {
        objeto.shipment.data = res.data
        return axios.get(chargesRoute + id)
      })
      .then((data) => {
        objeto.charg.data = data.data
        return axios.get(trackingRoute + id)
      })
      .then((trc) => {
        objeto.track.data = trc.data
        return axios.get(adressRoute + id)
      })
      .then((ad) => {
        objeto.adress.data = ad.data
      })
      .then(() => axios.post('/user/snap', { objeto, nombre: sessionUser }))
  }

  getSnaps(userName) {
    axios.get('/user/snap/', { params: { nombre: userName } })
      .then((userSnaps) => {
        this.setState({ snaps: userSnaps.data })
      })
  }

  deleteSnap(id) {
    axios.delete('/user/snap', { params: { id } })

  }

  getFavs(userName) {
    axios.get('/user/fav/', { params: { nombre: userName } })
      .then((userFavs) => {
        this.setState({ favs: userFavs.data })
      })
  }
  backToNew(shipment) {
    this.setState({ savedShipment: {}, viewSaved: false })
    this.fetchShipment(shipment)
  }
  emptyState() {
    this.setState({ shipment: {}, savedShipment: {}, viewSaved: false, id: 0 })
  }
  render() {
    var user = sessionStorage.getItem('user');
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Route exact path="/login" component={LoginContainer} />
        {user != null ? <Navbar emptyState={this.emptyState} id={this.state.id} saveFav={this.saveFav} getSnaps={this.getSnaps} getFavs={this.getFavs} shpId={this.state.id} saveSnap={this.saveSnap} fetch={this.fetchSavedShipment} delete={this.deleteSavedShipment} viewSaved={this.state.viewSaved} history={this.props.history} /> : ''}
        {user != null ? (<SearchBar backToNew={this.backToNew} viewSaved={this.state.viewSaved} id={this.state.id} currentView={this.currentView} fetchShipment={this.fetchShipment} shipment={this.state.viewSaved ? this.state.savedShipment.objeto.shipment : this.state.shipment} oldId={this.state.viewSaved ? this.state.savedShipment.objeto.track.data[0].SHIPMENT : ""} />) : ('')}
        {user != null ? (<Route path="/tracking" render={props => (<Tracking viewSaved={this.state.viewSaved} savedShipment={this.state.savedShipment} id={this.state.id} {...props} />)} />) : ('')}
        {user != null ? (<Route path="/charges" render={props => (<ChargesContainer viewSaved={this.state.viewSaved} savedShipment={this.state.savedShipment} id={this.state.id} />)} />) : ('')}
        {user != null ? (<Route exact path="/" render={props => (<ShippingContainer viewSaved={this.state.viewSaved} savedShipment={this.state.savedShipment} id={this.state.id} {...props} />)} />) : ('')}
        {user != null ? (<Route exact path="/verSnaps" render={props => <Snaps {...props} fetchSavedShipment={this.fetchSavedShipment} snapsArray={this.state.snaps} deleteSnap={this.deleteSnap} getSnaps={this.getSnaps} />} />) : ('')}
        {user != null ? (<Route exact path="/verFavs" render={props => <Favs {...props} deleteFav={this.deleteFav} favsArray={this.state.favs} deleteFav={this.deleteFav} getFavs={this.getFavs} fetchShipment={this.fetchShipment} />} />) : ('')}
      </div>
    );
  }
}

export default Main;
