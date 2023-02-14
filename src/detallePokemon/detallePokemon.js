import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetallePokemon(){
    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => { getPokemonDetails() }, []);

    function getPokemonDetails(){
        fetch("https://pokeapi.co/api/v2/pokemon/" + id)
            .then((response) => response.json())
            .then((datosAPI) => {
                setPokemon(datosAPI);
                setLoaded(true);
                console.log(datosAPI)
            })
    }

    
    if(loaded){return(
            <> 
            <h1>{id}</h1>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card mt-3 ">
                            <div className="card-body">
                                <h5 className="card-title">{pokemon.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">N.º {pokemon.id}</h6>
                                <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="row row-cols-2 d-flex justify-content-center align-items-center">
                        <div className="col"><p className="fs-4"><span>Height: </span>{pokemon.height}m</p></div>
                        <div className="col"><p className="fs-4"><span>Weight: </span>{pokemon.weight}kg</p></div>
                        <div className="col"><p className="fs-4"><span>Type: </span>{pokemon.types[0].type.name}</p></div>
                        <div className="col"><p className="fs-4"><span>Main ability: </span>{pokemon.abilities[0].ability.name}</p></div>
                    </div>
                </div>
            </div>
            </>
        );
        }
}

export default DetallePokemon;