import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: 0,
        }
    }
    componentDidMount() {
        $('li').on('click', function () {
            $('li').removeClass('active');
            $(this).addClass('active');
        });
    }

    render() {
        var siteFlag = ""
        const flags = {
            MLA: '/images/arg_flag.png',
            MLB: '/images/brasil_flag.png',
            MLM: '/images/mexico_flag.png',
            MCO: '/images/colombia_flag.png',
            MLC: '/images/chile_flag.png',
            MLU: '/images/uruguay_flag.png',
        }
        if (this.props.shipment.data) siteFlag = flags[this.props.shipment.data[0].SITE]
        return (
            <div>
                {this.props.viewSaved ? <button id="advertenciaSnap" onClick={() => { this.props.backToNew(this.props.oldId) }} >Salir de Snapshot</button> : null}
                <ul className="nav nav-tabs" id="tabs">
                    <li role="presentation" className="active"><Link onClick={() => this.props.fetchShipment(this.props.id)} to="/" className="navbar-brand">Shipping</Link></li>
                    <li role="presentation"><Link onClick={() => this.props.fetchShipment(this.props.id)} to="/tracking" className="navbar-brand">Tracking</Link></li>
                    <li role="presentation"><Link onClick={() => this.props.fetchShipment(this.props.id)} to="/charges" className="navbar-brand">Charges</Link></li>
                </ul>
                <div className="parent">
                    <div className="child1 searchBarElem">
                        <h3>Shipment</h3>
                        <form onSubmit={(e) => { e.preventDefault(); if (Number.isInteger(this.state.searchValue)) this.props.fetchShipment(this.state.searchValue) }}>
                            <input className="form-control" id="searchInput" type="text" onChange={(e) => { this.setState({ searchValue: Number(e.target.value) }) }} />
                            <button id="boton" className="btn btn-primary" type="submit">Buscar</button>
                        </form>
                    </div>
                    <div className="child2 searchBarElem">
                        <h3>Site</h3>
                        <img className="flagShipment" src={siteFlag} />
                    </div>
                    <div className="child2 searchBarElem">
                        <h3>Real Cost</h3>
                        <br></br>
                        <p> {this.props.shipment.data && '$ ' + this.props.shipment.data[0].REAL_COST}</p>
                    </div>
                    <div className="child2 searchBarElem">
                        <h3>Picking Type</h3>
                        <br></br>
                        <p>  {this.props.shipment.data && this.props.shipment.data[0].PICKING_TYPE}</p>
                    </div>
                    <div className="child2 searchBarElem">
                        <h3>Carrito</h3>
                        <br></br>
                        <p> {this.props.shipment.data && this.props.shipment.data[0].CARRITO_FLAG}</p>
                    </div>
                    <div className="child2 searchBarElem">
                        <h3>Status</h3>
                        <br></br>
                        <p> {this.props.shipment.data && this.props.shipment.data[0].STATUS}</p>
                    </div>
                    <div className="child2 searchBarElem">
                        <h3>Substatus</h3>
                        <br></br>
                        <p> {this.props.shipment.data && this.props.shipment.data[0].SUBSTATUS}</p>
                    </div>
                    <div className="child2 searchBarElem">
                        <h3>Clasificación</h3>
                        <br></br>
                        <p> {this.props.shipment.data && this.props.shipment.data[0].CLASIFICACION}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;