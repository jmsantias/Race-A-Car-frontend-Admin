import React from 'react'
import Header from "../Header"
import {Button, Input} from "@nextui-org/react";


const AgregarAuto = () => {
  return (
  <>
  <Header/>
  <div className='h-full w-screen pt-5 pb-5 bg-secondaryBlue'>

    <form className='w-1/2 mx-auto bg-[#d4d4d4] p-10' >
        <h1 className='text-center text-fsHero text-primaryBlue'>Agregar vehículo</h1>

        <div className='flex items-center justify-around gap-5 my-5'>
            <span className='w-1/2 bg-primaryGold text-primaryWhite rounded-md text-center py-[14px]'>Marca</span>
            <Input className='w-1/2'  variant='faded' size='md'></Input>
        </div>
        <div className='flex items-center justify-around gap-5 mt-5'>
            <span className='w-1/2 bg-primaryGold text-primaryWhite rounded-md text-center py-[14px]'>Modelo</span>
            <Input className='w-1/2'  variant='faded' size='md'></Input>
        </div>
        <div className='flex items-center justify-around gap-5 mt-5'>
            <span className='w-1/2 bg-primaryGold text-primaryWhite rounded-md text-center py-[14px]'>Año</span>
            <Input className='w-1/2' type='number' variant='faded' size='md'></Input>
        </div>
        <div className='flex items-center justify-around gap-5 mt-5'>
            <span className='w-1/2 bg-primaryGold text-primaryWhite rounded-md text-center py-[14px]'>Capacidad</span>
            <Input className='w-1/2' type='number'  variant='faded' size='md'></Input>
        </div>
        <div className='flex items-center justify-around gap-5 mt-5'>
            <span className='w-1/2 bg-primaryGold text-primaryWhite rounded-md text-center py-[14px]'>Categoria</span>
            <Input className='w-1/2'  variant='faded' size='md'></Input>
        </div>
        <div className='flex items-center justify-around gap-5 mt-5'>
            <span className='w-1/2 bg-primaryGold text-primaryWhite rounded-md text-center py-[14px]'>Precio</span>
            <Input className='w-1/2' type='number' variant='faded' size='md'></Input>
        </div>
        <div className='flex items-center justify-around gap-5 mt-5'>
            <span className='w-1/2 bg-primaryGold text-primaryWhite rounded-md text-center py-[14px]'>Imagenes</span>
            <Input className='w-1/2' type='file'  multiple  variant='faded' size='md'></Input>
        </div>

        <div className='flex mt-10'>
        <Button className='w-1/2 mx-auto bg-primaryBlue text-primaryWhite'>Confirmar vehículo</Button>
        </div>

    </form>
  </div>
  </>
  )
}

export default AgregarAuto