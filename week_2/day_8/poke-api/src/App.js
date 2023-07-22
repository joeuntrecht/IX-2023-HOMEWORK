import "./App.css";

import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const url = "https://pokeapi.co/api/v2/";

  const [pokemon, setPokemon] = useState([]);
  const [name, setName] = useState("");

  async function fetchPokemon() {
    //fetch Library

    const res = await fetch(url + "pokemon", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setPokemon(data.results);
    console.log(data.results);
  }

  function editPokeName(pokeName) {
    setName(pokeName);
    console.log(pokeName);
  }

  return (
    <div className="text-center m-4">
      <button className="btn btn-primary" onClick={fetchPokemon}>
        Fetch Pokemon
      </button>

      <div>
        {pokemon.map((poke) => {
          return <div key = {poke.name}>
            {poke.name}
            </div>
        })}
      </div>
    </div>
  );
}

export default App;
