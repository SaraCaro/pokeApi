import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="pt-5 bg-dark">
          <div  className="d-flex justify-content-evenly align-items-center mb-5 pb-5">
          <Link to="/"><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI" width="200"/></Link>
              <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                  <div className="container-fluid">
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <Link className="nav-link" to="/">Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/pokemon">Pokemons</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/jugar">Jugar</Link>
                              </li>
                          </ul>
                        </div>
                      </div>
                  </nav>
          </div>
    </header>
  );
}

export default Header;