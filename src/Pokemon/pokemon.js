import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Pokemon({pokeUrl}){
    const [pokemon, setPokemon] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => { getPokemonData() }, []);

    function getPokemonData(){
        fetch(pokeUrl)
            .then((response) => response.json())
            .then((datosAPI) => {
                setPokemon(datosAPI);
                setLoaded(true);
            })
    }

    if(loaded){
        return(
            <>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">N.º {pokemon.id}</h6>
                        <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name}/>
                        <Link to={`/detallePokemon/${pokemon.name}`} className="btn btn-danger mt-3">Ver más</Link>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Pokemon;