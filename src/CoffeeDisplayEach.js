import React, {useState} from 'react';
import CoffeeDelete from "./CoffeeDelete";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CoffeeDisplayEach(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="coffee-post">
            <img className="coffee-img" src={props.coffee.pictureUrl} alt="Coffee"></img>
            <div className="coffee-post-bottom">
                <div className="coffee-post">
                    <span>Nom du café: {props.coffee.name}</span>
                    <span>Description: {props.coffee.description}</span>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body><CoffeeDelete coffee={props.coffee} handleClose={handleClose} getCoffee={props.getCoffee}/></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Fermer
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <button className="btn-transparent" onClick={handleShow}>
                    <img src="icons/trash-can-solid.svg" className="coffee-icon" alt="Trash can" />
                </button>
            </div>
        </div>
    )
}

export default CoffeeDisplayEach;