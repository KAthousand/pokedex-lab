import React from 'react'

function pokeInfo(props) {
  return (
    <div>
      <h2>Name: {props.poke.name}</h2>
      <h2>ID: {props.poke.id}</h2>
      <img src={props.poke.sprites.back_default} alt={props.poke.name} />
    </div>
  )
}

export default pokeInfo