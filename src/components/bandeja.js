import React, { Component } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
//import { Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';

export default class bandeja extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            item: {},
            inidicador: '',
            bandejas: []
        };
    }

    // state = {
    //     bandejas: []
    // }

    async componentDidMount() {
        this.get();
    }
    //https://localhost:44318/api/solicitud
    get = async () => {
        const res = await axios.get('http://juancarlos2020-001-site1.etempurl.com/api/solicitud');
        this.setState({
            bandejas: res.data
        });
    }


    handleClose() {
        this.setState({ show: false });
    }

    handleShow(item) {
        this.setState({ show: true, item: item });
    }

    aprobar(id) {
        alert("Aprobado" + id);
    }

    denegado(id) {
        alert("Denegado " + id);
    }


    render() {

        return (

            <div className="row">
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detallle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Nombre: {this.state.item.nombre}</p>
                        <div className="todo-list">
                        <p>Indicador: <strong>{this.state.item.monto < 100 ? 'BUENO' : 'MALO'}</strong></p>
                            <img src={require('../components/img/red-circle.jpg')} alt="red-circle" width="40" height="40"/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-info" onClick={() => this.handleClose()}>cerrar Modal</button>
                    </Modal.Footer>
                </Modal>

                {

                    this.state.bandejas.map(item => (
                        <div className="col-md-4 p-2" key={item.id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>Solicitud Nro: {item.id}</h5>
                                </div>
                                <div className="card-body">
                                    <p><strong>Nombre: {item.nombre}</strong></p>
                                    <p><strong>Moneda: {item.moneda}</strong></p>
                                    <p><strong>Monto: {item.monto}</strong></p>
                                    <p><strong>Fecha Solicitud:  {format(item.fecharegistro)}</strong></p>

                                    <p><strong>Descripcion:</strong> {item.descripcion}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success mr-1" onClick={() => this.aprobar(item.id)}>
                                        Aprobar
                                    </button>
                                    <button className="btn btn-danger mr-1" onClick={() => this.denegado(item.id)}>
                                        Denegar
                                    </button>
                                    <button className="btn btn-info mr-1" onClick={() => this.handleShow(item)}>sentinel </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
