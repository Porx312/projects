'use client'
import React, { useState } from 'react'
import HeaderPokemon from './components/HeaderPokemon'
import PokemonData from './components/PokemonData'
import CarruselPokemon from './components/CarruselPokemon'
import NamePokemon from './components/NamePokemon'
import Arrow from './components/Arrow'

interface Pokemon {
  id: number
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
  }
  }
  types: {
    type: {
      name: string
    }
   
  }[]
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
  moves: {
    move: {
      name: string
    }
  }[] 
}



const Pokemon = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  
  return (
    <section className='flex w-full h-full pb-6  pt-2 px-5 md:flex-row flex-col items-center justify-between relative bg-cover bg-center'   style={{ backgroundImage: `url('/pokemon/background/${pokemon?.types[0]?.type.name || "background"}.jpeg')` }} >
      <NamePokemon name={pokemon?.name || "Pikachu"} id={pokemon?.id || 25}/>

      <article className='flex h-full w-full flex-col items-center justify-between'> 
      <HeaderPokemon pokemon={pokemon} setPokemon={setPokemon}/>
      <PokemonData 
        img={pokemon?.sprites?.other?.['official-artwork']?.front_default || "/pokemon/pikachu.png"} 
        stats={pokemon?.stats || [{base_stat: 30, stat:{name: 'fire'},}, {base_stat: 40, stat:{name: 'water'},}, {base_stat: 50, stat:{name: 'electric'},}, {base_stat: 60, stat:{name: 'grass'},}]} 
        moves={pokemon?.moves || [{move: {name: 'Thunderbolt'}}]} 
        type={pokemon?.types[0]?.type.name ||'electric'} 
      />
      <CarruselPokemon/>
      </article>
      
      <Arrow/>
    </section>
  )
}

export default Pokemon
