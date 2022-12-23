import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useEffect, useState } from "react";

function PokemonPage() {
  const [pokemonCards, setPokemonCards] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchData = async () => {
    try {
    const resp = await fetch("http://localhost:3001/pokemon")
    const data = await resp.json()
    setPokemonCards(data)
    }catch(error){
      alert(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  const filteredPokemon = filter==="" ? pokemonCards : pokemonCards.filter((pokemon) => {
    return pokemon.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokemonCards={setPokemonCards}/>
      <br />
      <Search filter={filter} setFilter={setFilter}/>
      <br />
      <PokemonCollection pokemonCards={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
