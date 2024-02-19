import { Button } from '@nextui-org/react'
import React from 'react'
const Hero = () => {
  return (
    <div className='h-screen w-full flex justify-center space-x-100'>
    
    <h1 className='text-primaryWhite text-fsHero'>Panel de administración</h1>

    <Button size='lg' className='text-primaryWhite bg-primaryGold' radius='full' variant='solid'>Agregar nuevo vehículo</Button>

    </div>
    
  )
}

export default Hero