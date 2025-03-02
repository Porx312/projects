import Image from 'next/image'
import React from 'react'

const CarruselPokemon = () => {
  return (
    <div className='hidden md:flex w-full   gap-4 items-center md:justify-end justify-center'> 
    {[1,2,3].map((item) => (
      <div key={item} className='md:w-40 md:h-40 w-30 h-30   item  bg-gray-300/40 rounded-lg flex items-center justify-center'>
        <Image src={`/pokemon/poke1.png`} width={50} height={50} alt='pokemon'/>
      </div>
    ))}
      
    </div>
  )
}

export default CarruselPokemon
