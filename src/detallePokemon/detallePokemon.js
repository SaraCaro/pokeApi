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
                <div className="row d-flex justify-content-center">
                    <h2>Tipos</h2>
                    <ul>
                        {pokemon.types.map((tipo) =>
                            <li key={tipo.type.name}>{tipo.type.name}</li>
                        )}
                    </ul>

                    <h2>Habilidades</h2>
                    <ul>
                        {pokemon.abilities.map((habilidad) =>
                            <li key={habilidad.ability.name}>{habilidad.ability.name}</li>
                        )}
                    </ul>

                    <h2>Estadísticas</h2>
                    <ul>
                        {pokemon.stats.map((stat) =>
                            <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                        )}
                    </ul>

                    <h2>Movimientos</h2>
                </div>
            </div>
            </>
        );
        }
}

export default DetallePokemon;