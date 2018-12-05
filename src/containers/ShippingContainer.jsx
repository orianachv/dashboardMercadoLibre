import React from 'react';
import axios from 'axios';
import { shipmentRoute, adressRoute } from '../../server/api-config';

//COMPONENTS
import Truck from '../components/ShippingComponents/Truck';
import Scale from '../components/ShippingComponents/Scale';
import Receiver from '../components/ShippingComponents/Receiver';
import Sender from '../components/ShippingComponents/Sender';
import Cart from '../components/ShippingComponents/Cart';
import Flag from '../components/ShippingComponents/Flag';
import Clock from '../components/ShippingComponents/Clock';
import Billete from '../components/ShippingComponents/Billete';



export default class ShippingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipment: [],
      addresses: [],
      senderIndex: 0,
      newShipment: [],
      newAdresses: []
    }
    this.swip = this.swip.bind(this);
  }

  swip(e) {
    switch (e.keyCode) {
      case 37:
        this.state.senderIndex > 0 ? this.setState({ senderIndex: this.state.senderIndex - 1 }) : null; break;
      case 39:
        this.state.senderIndex < this.state.addresses[0].SENDER.length - 1 ? this.setState({ senderIndex: this.state.senderIndex + 1 }) : null; break;
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.id != 0 && !nextProps.viewSaved) {
      this.setState({ newShipment: [], newAdresses: [] });
      axios.get(shipmentRoute + nextProps.id)
        .then(res => res.data)
        .then(shipment => this.setState({
          shipment: shipment, addresses: [],
          senderIndex: 0
        }))
        .then(() => axios.get(adressRoute + nextProps.id)
          .then(res => res.data)
          .then(addresses => this.setState({ addresses })))
    }
  }

  componentDidMount() {
    if (this.props.viewSaved) {
      this.setState({ shipment: this.props.savedShipment.objeto.shipment.data, addresses: this.props.savedShipment.objeto.adress.data })
      axios.get(shipmentRoute + this.props.savedShipment.objeto.adress.data[0].SHP_SHIPMENT_ID)
        .then((res) => this.setState({ newShipment: res.data }))
        .then(() => axios.get(adressRoute + this.props.savedShipment.objeto.adress.data[0].SHP_SHIPMENT_ID))
        .then((re) => this.setState({ newAdresses: re.data }))
    }
  }

  componentWillMount() {
    document.body.addEventListener('keydown', this.swip);
  }

  render() {
    return (
      <div>
        <div className="containerShipping">
          <div className="itemShipping">
            <Clock shipment={this.state.shipment[0]} newShipment={this.state.newShipment[0]} />
          </div>
          <div className="itemShipping">
            <Billete shipment={this.state.shipment[0]} newShipment={this.state.newShipment[0]} />
          </div>
          <div className="itemShipping">
            <div className="itemShipping">
              <Cart shipment={this.state.shipment[0]} newShipment={this.state.newShipment[0]} />
            </div>
            <div className="itemShipping">
              <Flag shipment={this.state.shipment[0]} newShipment={this.state.newShipment[0]} />
            </div>
          </div>
        </div>
        <div className="containerShipping">
          <div className="itemShipping" >
            <Truck shipment={this.state.shipment} newShipment={this.state.newShipment[0]} />
          </div>
          <div className="itemShipping">
            <Scale shipment={this.state.shipment} newShipment={this.state.newShipment[0]} />
          </div>
          <div className="itemShipping">
            <Receiver addresses={this.state.addresses} newShipment={this.state.newAdresses[0]} />
          </div>
          <div className="itemShipping">
            <Sender addresses={this.state.addresses} index={this.state.senderIndex} newShipment={this.state.newAdresses[0]} />
          </div>
        </div>
      </div>
    )
  }
}