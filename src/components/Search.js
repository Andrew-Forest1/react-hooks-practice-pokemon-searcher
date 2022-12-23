import React from "react";

function Search({filter, setFilter}) {
  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} value={filter}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
