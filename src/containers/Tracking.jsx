import React, { Component } from 'react';
import axios from 'axios';
import SingleTracking from '../components/SingleTracking';
import { trackingRoute } from '../../server/api-config';

export default class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackings: '',
      indiceInicial: 0,
      indiceFinal: 3,
      arrTrackingsAux: [],
      newTrackings: '',
      newArrTrackingsAux: []

    };
    this.addArr = this.addArr.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id != 0 && !nextProps.viewSaved) {
      axios
        .get(trackingRoute + nextProps.id)
        .then(res =>
          this.setState(
            {
              trackings: res.data[0],
              indiceInicial: 0,
              indiceFinal: 3,
              arrTrackingsAux: [],
            },
            () => { },
          ),
        )
        .then(() => this.addArr());
    }
    if (nextProps.viewSaved) {
      axios.get(trackingRoute + nextProps.savedShipment.objeto.track.data[0].SHIPMENT)
        .then((res) => this.setState({ newTrackings: res.data[0] }))
        .then(() => {
          this.setState(
            {
              trackings: nextProps.savedShipment.objeto.track.data[0],
              indiceInicial: 0,
              indiceFinal: 3,
              arrTrackingsAux: [],
            },
            () => this.addArr(),
          )
        }
        )
    }
  }

  addArr() {
    this.setState({
      arrTrackingsAux: this.state.trackings.TRACKING.slice(
        this.state.indiceInicial,
        this.state.indiceFinal,
      ),
      newArrTrackingsAux: this.state.newTrackings && this.state.newTrackings.TRACKING.slice(
        this.state.indiceInicial,
        this.state.indiceFinal
      )
    });
  }

  handleClickLeft() {
    this.setState(
      {
        indiceInicial: this.state.indiceInicial - 3,
        indiceFinal: this.state.indiceFinal - 3,
      },
      () => this.addArr(),
    );
  }
  handleClickRight() {
    this.setState(
      {
        indiceInicial: this.state.indiceInicial + 3,
        indiceFinal: this.state.indiceFinal + 3,
      },
      () => this.addArr(),
    );
  }

  render() {
    return (
      <SingleTracking
        trackings={this.state.arrTrackingsAux}
        newTrackings={this.state.newArrTrackingsAux}
        newTrackingsCompleto={this.state.newTrackings}
        indiceInicial={this.state.indiceInicial}
        indiceFinal={this.state.indiceFinal}
        handleClickLeft={this.handleClickLeft}
        handleClickRight={this.handleClickRight}
        trackingsCompleto={this.state.trackings}
      />
    );
  }
}
