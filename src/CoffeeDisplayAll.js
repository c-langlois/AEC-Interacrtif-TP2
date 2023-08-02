import React, { useState } from 'react';
import CoffeeDisplayEach from './CoffeeDisplayEach.js';
import CoffeeAdd from './CoffeeAdd';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CoffeeDisplayAll(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn-transparent" onClick={handleShow}>
                Ajouter un café<img src="icons/cafe-plus.svg" className="coffee-icon" alt="Add a coffee" />
            </button>
            <div>
              <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body><CoffeeAdd getCoffee={props.getCoffee} handleClose={handleClose}/></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Fermer
                </Button>
              </Modal.Footer>
              </Modal>
            </div>
            {props.coffees.length > 0 && (
                props.coffees.map(coffee => (
                    <CoffeeDisplayEach key={coffee.id} coffee={coffee} getCoffee={props.getCoffee}/>
                ))
            )}
        </>
    )
}

export default CoffeeDisplayAll;