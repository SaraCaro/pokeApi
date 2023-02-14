import { useState, useEffect } from "react";

function Juego(){
    
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const [listaPokemon, setListaPokemon] = useState([]); 
    const [urlPokeAPI, setUrlPokeAPI] = useState();

    useEffect(() => {
        // cargaTodos();
        getRandomPokemon();
        getRandomPokemon();
    }, []);

  function cargaTodos(){
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())  
      .then((datosAPI) => {
        //setListaPokemon(listaPokemon.concat(datosAPI.results))
        console.log('Peticion')
      })
    }

    // useEffect(() => { getRandomPokemon(); getRandomPokemon(); getRandomPokemon()}, []);

    function getRandomPokemon(){

        fetch("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 898))
            .then((response) => response.json())
            .then((datosAPI) => {
                setPokemon(pokemon.concat(datosAPI));
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
                            {pokemon.map((poke) => 
                            <h5 key={poke.name}>{poke.name}</h5>
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