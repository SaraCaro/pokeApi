import { useState, useEffect } from "react";

function Juego(){
    
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getRandomPokemon();
    }, []);


    function getRandomPokemon(){
        var aux = new Array();
        fetch("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 898))
            .then((response) => response.json())
            .then((datosAPI) => {
                console.log(datosAPI.name)
                aux.push(datosAPI.name);
            })
            fetch("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 898))
            .then((response) => response.json())
            .then((datosAPI) => {
                console.log(datosAPI.name)
                aux.push(datosAPI.name);
            })
            fetch("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 898))
            .then((response) => response.json())
            .then((datosAPI) => {
                aux.push(datosAPI.name);
                setPokemon(aux);
                setLoaded(true);
                console.log(datosAPI.name)
            })

    }


    if(loaded){return(
            <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card mt-3 ">
                            <div className="card-body">
                                {pokemon[0].name}
                                {pokemon[1].name}
                            {pokemon.map((poke) => 
                            <h5 key={poke}>{poke}</h5>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>);
}
}
export default Juego;