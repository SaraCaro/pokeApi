import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllPokemons from './allPokemons/allPokemons';
import Header from './Header/header';
import Inicio from './Inicio/inicio';
import DetallePokemon from './detallePokemon/detallePokemon';
import ListaDatos from './listaDatos/listaDatos';
import Footer from './Footer/footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/pokemon" element={<AllPokemons />}></Route>
          <Route path="/detallePokemon/:id" element={<DetallePokemon />}></Route>
          <Route path="/listaDatos" element={<ListaDatos />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
