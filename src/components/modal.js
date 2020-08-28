import React, { Component } from 'react';
import Modal from 'react-modal';

class modal extends Component{
    render(){
       const { text } = this.props;
       return (
          <Modal
             onRequestClose={this.props.onRequestClose}
             openTimeoutMS={150}
             closeTimeoutMS={150}
             style={customStyle}>
             <h1>What you input : {text}</h1>
             <button onClick={ModalManager.close}>Close Modal</button>
          </Modal>
       );
    }
 }

 
export default modal;