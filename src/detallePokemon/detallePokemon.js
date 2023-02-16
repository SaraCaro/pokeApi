import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";

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
            <div className="text-bg-dark d-flex align-items-center">
            <div className="text-center col-6">
                        <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            />
                            <Carousel.Caption>
                                <h3>Default Front</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={pokemon.sprites.back_default}
                            alt={pokemon.name}
                            />
                            <Carousel.Caption>
                                <h3>Default Back</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={pokemon.sprites.front_shiny}
                            alt={pokemon.name}
                            />
                            <Carousel.Caption>
                                <h3>Shiny Front</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={pokemon.sprites.back_shiny}
                            alt={pokemon.name}
                            />
                            <Carousel.Caption>
                                <h3>Shiny Back</h3>
                            </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="text-start ms-5 col-5">
                        <hr/>
                        <h2>{pokemon.id}</h2>
                        <h3><b>Nombre: </b>{pokemon.name}</h3>
                        <h3><b>Altura: </b>{pokemon.height} Decimetros</h3>
                        <h3><b>Peso: </b>{pokemon.weight} Hectogramos</h3>
                        <h3><b>Experiencia: </b>{pokemon.base_experience}</h3>
                        <h3><b>Tipo: </b></h3>
                        <ul>
                            {pokemon.types.map((tipo) => <li>{tipo.type.name}</li>)}
                        </ul>
                    </div>
                    
                </div>
            </>
        );
        }
}

export default DetallePokemon;