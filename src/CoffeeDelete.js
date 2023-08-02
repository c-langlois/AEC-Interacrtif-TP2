import React from 'react';

function CoffeeDelete(props) {
    console.log(props);
    const deleteCoffeeHandler = () => {

        fetch(`https://insta-api-api.0vxq7h.easypanel.host/coffees/${props.coffee.id}`, {
        method: "DELETE"
        })
        .then(response => {
        if (response.ok) {
            props.handleClose();
            props.getCoffee();
        }
        })
        .catch(error => {
        console.error("Erreur lors de la suppression du café:", error);
        });
    };

    return (
        <div className="d-flex align-items-center flex-column gap-3">
            <span className="lead">Voulez-vous vraiment effacer le café suivant?</span>
            <img className="coffee-img-mini" src={props.coffee.pictureUrl} alt="Coffee" />
            <div className="coffee-delete-description">
                <div>
                    <span>Nom du café: {props.coffee.name}</span><br/>
                    <span>Description: {props.coffee.description}</span>
                </div>
            </div>
            <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-primary" onClick={deleteCoffeeHandler}>Oui</button>
                    <button className="btn btn-secondary" onClick={props.handleClose}>Non</button>
            </div>
        </div>
    );
}

export default CoffeeDelete;