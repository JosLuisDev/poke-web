import React, { Fragment, useEffect, useState } from 'react';
import { Button, Table } from 'reactstrap';
import './App.css';
import Barra from './components/Barra/Barra';
import ModalPokemon from './components/ModalPokemon/ModalPokemon';
import TablaPokemon from './components/TablaPokemon/TablaPokemon';
import { getAllPokemon, getPokemon } from './services/pokemon';


function App() {

  const[infoPokemon, setInfoPokemon] = useState([]);
  const[nextPageUrl, setNextPageUrl] = useState('');
  const[prevPageUrl, setPrevPageUrl] = useState('');
  const[loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [pokemonModal, setPokemonModal] = useState([]);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/';

useEffect(() => {
  async function fetchData() {//obtener la data del API
    let response = await getAllPokemon(initialUrl);//peticion asincrona (esperara hasta que la peticion termine para seguir)
    setNextPageUrl(response.next);//obtiene la url siguiente
    setPrevPageUrl(response.previous);//obtiene la url previa
    await cargandoPokemon(response.results);
    setLoading(false);//indicamos que la data ya esta cargada y ponemos en false
  }
  fetchData();
}, []);

/*Paginacion*/
const next = async () => {
  setLoading(true);
  let data = await getAllPokemon(nextPageUrl);
  await cargandoPokemon(data.results);
  setNextPageUrl(data.next);
  setPrevPageUrl(data.previous);
  setLoading(false);
}

const prev = async () => {
  if (!prevPageUrl) {
    return;
  }

  setLoading(true);
  let data = await getAllPokemon(prevPageUrl);
  await cargandoPokemon(data.results);
  setNextPageUrl(data.next);
  setPrevPageUrl(data.previous);
  setLoading(false);
}

const cargandoPokemon = async data => {
  //Devuelve una promesa correcta cuando todas terminaron correctamente o el motivo por el cual cualquiera es rechazada(recibe un array y lo recorre)
  let datosPokemon = await Promise.all(
      data.map(async pokemon => {
        let registroPokemon = await getPokemon(pokemon.url);//Le pasamos la url de cada pokemon del array
        return registroPokemon
    })
  );

  setInfoPokemon(datosPokemon);
};

const openModal = (pokemon) => {
  setPokemonModal(pokemon);
  console.log(pokemon);
  setShow(true);
}

const closeModal = () => {
  setShow(false);
}

  return (
    <div>
      {loading ? <h1>Loading...</h1> : (
          <Fragment>
            <Barra/>
           
            <div className="d-flex flex-row justify-content-center alig-items-center pt-3 pb-3 bg-dark">
              <Button outline color={"danger"} onClick={prev} className={"mr-3"}>Previous</Button>
              <Button outline color={"danger"} onClick={next}>Next</Button>
            </div>
            
            <ModalPokemon show={show} pokemonModal={pokemonModal} closeModal={closeModal}/>
            
              <Table striped hover bordered dark size="sm" style={{width:"100%"}} className={"m-0"}>
                <thead>
                  <tr>
                    <th>Pokemon</th>
                    <th>Pokemon Name</th>
                    <th>Pokemon Type</th>
                    <th>Pokemon Information</th>
                  </tr>
                </thead>
                <tbody>
                  {infoPokemon.map((pokemon, i) => {
                    return <TablaPokemon key={i} pokemon={pokemon} openModal={openModal}/>
                  })}
                </tbody>
              </Table>
            
              <div className="d-flex flex-row justify-content-center alig-items-center pt-3 pb-3 bg-dark">
              <Button outline color={"danger"} onClick={prev} className={"mr-3"}>Previous</Button>
              <Button outline color={"danger"} onClick={next}>Next</Button>
            </div>

          </Fragment>
      )}
    </div>
  );
}

export default App;
