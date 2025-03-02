import Image from 'next/image'
import React from 'react'
interface Props { 
  img: string
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
  type: string
}
const PokemonData = ({img, stats, moves, type}: Props) => {
  return (
    <div className='flex flex-wrap md:flex-row justify-center items-center gap-4 '>
      <div className='order-2 md:order-0  h-[350px] flex flex-col justify-between ' >
      {stats && stats.slice(0,4).map((item, index) => (
        <div key={index} className={`flex items-center justify-evenly rounded-2xl  bg-gray-300/40 w-[160px] p-1  m-2 ${index === 1 || index === 2 ? 'ml-0' : 'md:ml-10 ml-0'}`}>
          <Image src={`/pokemon/${index}.png`} width={40} height={40} alt='pokemon'/>
          <h2 className='text-white font-bold text-3xl' >{item.base_stat}</h2>
        </div>
      ))}
      </div>
      <div>
        <Image src={img} width={500} height={500} alt='pokemon'/>
      </div>
      <div className='order-2 md:order-0  h-[350px] flex flex-col justify-between ' >
      {moves && moves.slice(0, 4).map((item, index) => (
        <div key={index} className={`flex items-center w-[190px] justify-between rounded-2xl  bg-gray-300/40 p-1  m-2 ${index === 1 || index === 2 ? 'md:ml-10 ml-0' : 'ml-0'}`}>
          <h2 className='text-white font-bold text-xl' >{item.move.name}</h2>
          <Image src={`/pokemon/type/${type}.png`} width={40} height={40} alt={type}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default PokemonData
