"use client"

import type React from "react"
import {  useState } from "react"
import { Search } from "lucide-react"
import axios from "axios"
import Pokemon from '../Pokemon';
import Image from "next/image"

const HeaderPokemon = ({pokemon, setPokemon}: {pokemon: Pokemon | null, setPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const searchPokemon = async () => {
    if (!searchTerm.trim()) return

    setLoading(true)
    setError("")
    setPokemon(null)

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.trim().toLowerCase() || 'rayquaza'}`)
      setPokemon(response.data)
    } catch (err) {
      setError("Pokémon not found. Try another name or ID.")
      console.error("Error fetching pokemon:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    searchPokemon()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchPokemon()
    }
  }
const type = pokemon?.types[0]?.type.name || 'electric'
  return (
    <nav className="relative w-full">
      <div className="absolute right-4 flex space-x-2">
        <div className="bg-sky-500/50 backdrop-blur-sm px-6 py-2 rounded-full flex items-center">
          <span className="text-white mr-2">{type}</span>
           <Image src={`/pokemon/type/${type}.png`} width={40} height={40} alt={type}/>
        </div>

        <form onSubmit={handleSearch} className="bg-sky-500/50 backdrop-blur-sm rounded-full flex items-center pr-2">
          <input
            type="text"
            placeholder="search pokemon"
            className="bg-transparent text-white placeholder-white/70 px-4 py-2 outline-none w-40"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button type="submit" className="focus:outline-none">
            <Search className="w-5 h-5 text-white cursor-pointer" />
          </button>
        </form>
      </div>

      {/* Search Results */}
      {loading && (
        <div className="mt-16 p-4 bg-sky-500/50 backdrop-blur-sm rounded-lg max-w-xs mx-auto">
          <p className="text-white text-center">Searching...</p>
        </div>
      )}

      {error && (
        <div className="mt-16 p-4 bg-red-500/50 backdrop-blur-sm rounded-lg max-w-xs mx-auto">
          <p className="text-white text-center">{error}</p>
        </div>
      )}

     
    </nav>
  )
}



export default HeaderPokemon

