import React, { useState, useEffect } from 'react';
import CoffeeDisplayAll from './CoffeeDisplayAll.js';

function CoffeePage() {
    const [loading, setLoading] = useState(true);
    const [coffees, setCoffees] = useState([]);

    function getCoffee() {
        fetch("https://insta-api-api.0vxq7h.easypanel.host/coffees")
        .then(response => response.json())
        .then(response => {
            setLoading(false);
            setCoffees(response);
        })
        .catch((error) => console.log('Erreur lors du chargement des données: ', error));
    }
    useEffect(() => {
        getCoffee();
    }, [])

    return (
        <>
            <div className="coffee-page">
            {loading ? 
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> : null}
                <CoffeeDisplayAll getCoffee={getCoffee} coffees={coffees}/>
            </div>
        </>
    )
} 

export default CoffeePage;