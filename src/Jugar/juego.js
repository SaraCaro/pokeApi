import { useState, useEffect } from "react";

function Juego(){
    
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [seleccionado, setSeleccionado] = useState({});
    const [pokemonEscrito, setPokemonEscrito] = useState();

    useEffect(() => {
        getRandomPokemon();
    }, []);


    function getRandomPokemon(){
        fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 1000))
            .then((response) => response.json())
            .then((datosAPI) => {
                setSeleccionado(datosAPI);
            })
    }

    function selectPokemon(){
        const poke = pokemon[Math.floor(Math.random() * pokemon.length)];
        console.log(poke);
    }

    function checkPokemon(){
        if(pokemonEscrito === seleccionado.name){
            alert("Correcto");
            getRandomPokemon();
            setPokemonEscrito("");
        }else{
            alert("Incorrecto");
        }
    }

    {
        return(
            <>
                <div className="container">
                    <h1>¿Como se llama este pokemon?</h1>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card mt-3">
                                <div className="card-body">
                                    <img src={seleccionado.sprites.front_default} alt={seleccionado.name} />
                                    <input type="text" value={pokemonEscrito} onChange={(e) => setPokemonEscrito(e.target.value)} />
                                    <button class="btn bg-success text-light" onClick={checkPokemon}><i class="fa-solid fa-check"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
    );
}
}
export default Juego;