import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/pokemon';

function AllPokemons(){

    const [listaPokemon, setListaPokemon] = useState([]); 
    const [urlPokeAPI, setUrlPokeAPI] = useState("https://pokeapi.co/api/v2/pokemon?limit=8");

    useEffect(() => {
        cargaTodos();
    }, []);

  function cargaTodos(){
    fetch(urlPokeAPI)
      .then((response) => response.json())  
      .then((datosAPI) => {
        setListaPokemon(listaPokemon.concat(datosAPI.results))
        setUrlPokeAPI(datosAPI.next)
        console.log('Peticion')
      })
    }
  
  function cargarMas(){
      cargaTodos();
  }

    return (
    <>
        <div className="container">
        <div className="row">
            {listaPokemon.map((pokemon) => 
            <Pokemon key={pokemon.name} pokeUrl={pokemon.url}/>
            )}
        </div>
        </div>
        <button className="btn btn-dark my-4" onClick={cargarMas}>Obtener Más</button>
    </>
    );
}

export default AllPokemons;