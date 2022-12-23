import React from "react";
import { Form } from "semantic-ui-react";
import { useState } from "react";

function PokemonForm({setPokemonCards}) {
  const [newPokemon, setNewPokemon] = useState(
    {
      name: "",
      hp: "",
      sprites: {
        front:"",
        back:""
      }
    }
  );

  const postPokemon = (pokemon) => {
    fetch("http://localhost:3001/pokemon", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokemon)
    })
    .then(res => res.json())
    .then(pokemon => setPokemonCards(current => [...current, pokemon]))
    .catch((error) => alert(error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //const newPokemon 
    postPokemon(newPokemon)
    setNewPokemon({name: "",hp: "",sprites: {front:"", back:""}})
  }

  const handleChange = (e) => {
    setNewPokemon({...newPokemon, [e.target.name]:e.target.value})
  }

  const handleSprites = (e) => {
    if(e.target.name === "frontUrl"){
      setNewPokemon({...newPokemon, sprites:{front: newPokemon.sprites.back, front:e.target.value}})
    }
    else{
      setNewPokemon({...newPokemon, sprites:{front: newPokemon.sprites.front, back:e.target.value}})
    }
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} value={newPokemon.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} value={newPokemon.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleSprites}
            value={newPokemon.sprites.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleSprites}
            value={newPokemon.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
