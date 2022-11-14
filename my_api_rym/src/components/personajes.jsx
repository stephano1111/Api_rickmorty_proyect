import React, { useEffect, useState } from "react";
import axios from "axios";
import Personaje from "./personaje";

const Personajes = () => {
    const [personajes, setPersonajes] = useState([]);
    let [page, setPage] = useState(1);
    let url = "https://rickandmortyapi.com/api/character/?page=";
    
    useEffect(() => {
        axios.get(url+page).then((response) => {
            // console.log(response.data.results);
            setPersonajes(response.data.results);
        })
    }, [page]);

    const PreviusButton = () => {
        if(page>1){
            return(
                <button className="btn btn-info m-2" onClick={() => setPage(page-1)}>Previus</button>
            )
        }
        
    }
    const NextButton = () => {
        if(page<42){
            return(
                <button className="btn btn-info m-2" onClick={() => setPage(page+1)}>Next</button>
            )
        }
    }

    return(
        <>
            <div className="container">
                <div className="row">

                    {personajes.map((personaje, index) => {
                        return <Personaje key={index} personaje={personaje}/>;
                    })}
                    
                </div>
                <p>{page}</p>
                <PreviusButton/>
                <NextButton/>
            </div>
        </>
        
    );
}

export default Personajes;