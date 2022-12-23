import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonCards}) {
  const renderPokemonCards = pokemonCards.map((card) => {
    return <PokemonCard {...card} key={"pokemon " + card.id}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {renderPokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
