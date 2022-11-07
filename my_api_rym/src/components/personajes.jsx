import React, { useState } from "react";
import axios from "axios";

const Personajes = () => {
    const [personajes, setPersonajes] = useState([]);

    const getPersonajes = async () => {
        const peticion = await axios.get("https://rickandmortyapi.com/api/character")
        
        setPersonajes(...personajes, peticion.data.results);

        return 0;
    }
    getPersonajes();
    
    return(
        <p>l</p>
    );
}

export default Personajes;