import React, { useState, useEffect } from "react";
import axios from 'axios';
import Form from './Form';
import PokeInfo from './pokeInfo'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  const [pokeData, setPokeData] = useState({})
  const [newSearch, setNewSearch] = useState('pikachu')

  useEffect(() => {
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${newSearch}`
    const makeApiCall = async () => {
      const resp = await axios.get(pokemonURL)
      setPokeData(resp.data)
    }
    makeApiCall()
  }, [])

  useEffect(() => {
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${newSearch}`
    const makeApiCall = async () => {
      const resp = await axios.get(pokemonURL)
      setPokeData(resp.data)
    }
    makeApiCall()
  }, [newSearch])

  return (
    <>
      <header className="bg-dark d-flex justify-content-between px-5">
        <nav className="navbar navbar-dark">
          <div className="nav">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="https://www.freeiconspng.com/uploads/pokeball-transparent-png-2.png"
                width="55"
                height="55"
                className="d-inline-block align-top m-2 d-inline"
                alt="Pokéball"
              />
              <span className="navbar-text text-white font-weight-bold">
                Pokédex
              </span>
            </a>
          </div>
        </nav>
      </header>
      <main className="d-flex justify-content-center align-items-center">

        <section
          id="results"
          className="d-flex justify-content-center flex-wrap col-10"
        >
          <div className='poke-form'>
            <Form setNewSearch={setNewSearch} />
            {pokeData.name ? <PokeInfo poke={pokeData} /> : null}
          </div>
        </section>
      </main>

    </>
  );
}

export default App;
