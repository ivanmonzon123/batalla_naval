import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function ModalConf({ show, mensaje }) {
   const cambiar = ()=>{
      show = false;
   }
    return (

        <Modal show={show} onHide={false} backdrop="static" size="md">
          <Modal.Header>
            <Modal.Title className='w-100 text-center'>---BATALLA NAVAL---</Modal.Title>
          </Modal.Header>
          <Modal.Body className='w-100 text-center' style={{fontSize: '1.1rem'}}>{mensaje}</Modal.Body>
          <Modal.Footer>
            <Link to="/" className='btn btn-primary' onClick={cambiar}>
              Finalizar
            </Link>
          </Modal.Footer>
        </Modal>

    );
  }
