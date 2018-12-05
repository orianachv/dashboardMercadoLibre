import React, { Component } from 'react'
import Payments from '../components/charges/Payments'
import axios from 'axios'
import Orders from '../components/charges/Orders';
import Claims from '../components/charges/Claims';
import { chargesRoute } from '../../server/api-config'

export default class ChargesContainer extends Component {
  constructor() {
    super()
    this.state = {
      charges: [],
      newCharges: [],
      currentChargeMktpl: 0,
      currentChargeShp: 0,
      currentBonusShp: 0,
      currentMovement: 0,
    }
  }
  flagDetail = () => {
    (this.state.flag) ? this.setState({ flag: false }, () => { }) :
      this.setState({ flag: true }, () => { })
  }

  handleClickRight = (param) => {
    if (param == "MKTPL") this.setState({ currentChargeMktpl: this.state.currentChargeMktpl + 1 }, () => { })
    if (param == "BONUS") this.setState({ currentBonusShp: this.state.currentBonusShp + 1 }, () => { })
    if (param == "SHP") this.setState({ currentChargeShp: this.state.currentChargeShp + 1 }, () => { })
    if (param == "MOVEMENT") this.setState({ currentMovement: this.state.currentMovement + 1 }, () => { })
  }

  handleClickLeft = (param) => {
    if (param == "MKTPL") this.setState({ currentChargeMktpl: this.state.currentChargeMktpl - 1 }, () => { })
    if (param == "BONUS") this.setState({ currentBonusShp: this.state.currentBonusShp - 1 }, () => { })
    if (param == "SHP") this.setState({ currentChargeShp: this.state.currentChargeShp - 1 }, () => { })
    if (param == "MOVEMENT") this.setState({ currentMovement: this.state.currentMovement - 1 }, () => { })
  }

  sum = (arr, param) => {
    var aux = 0;
    arr.map(elem => (elem[param]) ? aux += Number(elem[param]) : null);
    return aux;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id != 0 && !nextProps.viewSaved) {
      axios
        .get(chargesRoute + nextProps.id)
        .then(res => this.setState({ charges: res.data }, () => { }))
    }
    if (nextProps.viewSaved) {
      axios.get(chargesRoute + nextProps.savedShipment.objeto.track.data[0].SHIPMENT)
        .then(res => this.setState({ newCharges: res.data }))
        .then(() => this.setState({ charges: nextProps.savedShipment.objeto.charg.data })
        )
    }
  }

  render() {
    return (
      <div id="chargesContainer">
        <Orders charges={this.state.charges[0]}
          newCharges={this.state.newCharges[0]}
          flagDetail={this.flagDetail}
          flag={this.state.flag}
          handleClickRight={this.handleClickRight}
          handleClickLeft={this.handleClickLeft}
          handleClickDetailsRight={this.handleClickDetailsRight}
          handleClickDetailsLeft={this.handleClickDetailsLeft}
          currentBonusShp={this.state.currentBonusShp}
          currentChargeMktpl={this.state.currentChargeMktpl}
          currentChargeShp={this.state.currentChargeShp}
          sum={this.sum}
        />
        <Payments charges={this.state.charges[0]}
          newCharges={this.state.newCharges[0]}
          handleClickLeft={this.handleClickLeft}
          handleClickRight={this.handleClickRight}
          currentMovement={this.state.currentMovement} />
        <Claims charges={this.state.charges[0]}
          newCharges={this.state.newCharges[0]} />
      </div>
    )
  }
}