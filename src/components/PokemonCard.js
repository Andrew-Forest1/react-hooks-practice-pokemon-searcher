import React from "react";
import { Card } from "semantic-ui-react";
import { useState } from "react";

function PokemonCard({id, name, hp, sprites}) {
  const [showFront, setShowFront] = useState(true);

  return (
    <Card>
      <div onClick={() => setShowFront(current => !current)}>
        <div className="image">
          <img src={showFront ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
