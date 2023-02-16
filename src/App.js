import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllPokemons from './allPokemons/allPokemons';
import Header from './Header/header';
import Inicio from './Inicio/inicio';
import DetallePokemon from './detallePokemon/detallePokemon';
import Footer from './Footer/footer';
import Juego from './Jugar/juego';
import ListaDatos from './listaDatos/listaDatos';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/pokemon" element={<AllPokemons />}></Route>
          <Route path="/detallePokemon/:id" element={<DetallePokemon />}></Route>
          <Route path="/jugar" element={<Juego />}></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
