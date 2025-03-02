import Image from 'next/image'
import React from 'react'

const Arrow = () => {
  return (
    <div className='absolute hidden md:block right-3 '>
        <Image src={'/pokemon/arrow.png'} width={20} height={20} alt='arrow'/>
    </div>
  )
}

export default Arrow
