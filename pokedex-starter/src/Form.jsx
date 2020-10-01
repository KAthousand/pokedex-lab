import React, { useState } from "react";

function Form(props) {
  const [pokeName, setpokeName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setNewSearch(pokeName);
    setpokeName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokeName"></label>
        <input
          placeholder="Search Pokemon Name"
          id="pokeName"
          type="text"
          value={pokeName}
          onChange={(e) => setpokeName(e.target.value)}
        />
        <br />
        <input type="submit" value="Find Pokemon Info" />
      </form>
    </>
  );
}

export default Form;