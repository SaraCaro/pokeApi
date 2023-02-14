function Inicio(){
    return(
        <div className="container d-flex">
            <div>
                <img src={require("../imagenes/pokeInicio.jpg")} width="500" className="shadow p-3 mb-5 bg-body-tertiary rounded"/>
            </div>
            <div className="d-flex flex-column">
                <h2>La mejor forma de aprenderte los pokemons</h2>
                <p>En esta página podrás obtener información de tus pokemons favoritos y aprendertelos mientras juegas.</p>
            </div>
        </div>
    );
}

export default Inicio;