import React from "react";

const Personaje = ({personaje}) => {
    return (  
        <div className="col-md-3 py-4 pb-4">
            <div className="card text-white bg-info mb-3">
                <img className="card-img-top" src={personaje.image} alt=""/>
                <div className="card-body">
                    <h3 className="card-title">{personaje.name}</h3>
                    <p className="card-text">{personaje.status} - {personaje.species}</p>
                </div>
            </div>  
        </div>
    );
}
 
export default Personaje;