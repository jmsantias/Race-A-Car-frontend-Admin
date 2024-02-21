
import { Button, Chip } from '@nextui-org/react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownItem, Pagination} from "@nextui-org/react";
import { FaEye } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import React, { useContext, useEffect } from 'react'
import Header from '../Header';

import { GlobalContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const AutosTable = () => {

    const navigate = useNavigate()

    const {state} = useContext(GlobalContext)

    const {autos} = state

    const [page, setPage] = React.useState(1);
    const rowsPerPage = 5;
  
    const pages = Math.ceil(autos.length / rowsPerPage);
  
    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return autos.slice(start, end);
    }, [page, autos]);

  return (
    <>
<Header/>
<div className='w-[95vw] mx-auto min-h-screen '>
        <div className='flex justify-between items-center text-fsSubtitle text-primaryBlue mb-20 mt-10'>
            <h3>Tabla de vehículos</h3>
            <Button variant='solid' className='bg-primaryGold text-primaryWhite' size='lg' onClick={() => navigate("/dashboard/agregar/auto")}>Agregar nuevo vehículo</Button>
        </div>

        <Table isStriped removeWrapper aria-label="Example static collection table" className='mb-20'
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color='warning'
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
        >
      <TableHeader>
        <TableColumn  className='bg-primaryGold text-primaryWhite'>Marca</TableColumn>
        <TableColumn  className='bg-primaryGold text-primaryWhite'>Modelo</TableColumn>
        <TableColumn  className='bg-primaryGold text-primaryWhite'>Capacidad</TableColumn>
        <TableColumn  className='bg-primaryGold text-primaryWhite'>Categoria</TableColumn>
        <TableColumn  className='bg-primaryGold text-primaryWhite'>Estado</TableColumn>
        <TableColumn  className='bg-primaryGold text-primaryWhite'>Precio por dia</TableColumn>
        <TableColumn  className='bg-primaryGold text-primaryWhite'>Imagenes</TableColumn>
        <TableColumn  className='bg-primaryGold text-primaryWhite'>Acciones</TableColumn>

      </TableHeader>
      <TableBody items={items}>
        {(item) => (
            
                <TableRow key={item.Modelo}>
                <TableCell>{item.Marca}</TableCell>
                <TableCell>{item.Modelo}</TableCell>
                <TableCell>{item.Capacidad}</TableCell>
                <TableCell>{item.Categoria}</TableCell>
                <TableCell><Chip color={item.Estado ? "primary" : "danger"}>{item.Estado ? "activo" : "inactivo"}</Chip></TableCell>
                <TableCell>{item.Precio}</TableCell>
                <TableCell><Button size="sm" variant='solid' className='bg-primaryGold text-primaryWhite'><FaEye className='text-[18px]' /></Button></TableCell>
                <TableCell>
                <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
                size='sm'
                className='border-primaryGold'
              >
               <HiOutlineDotsVertical/>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="editar">editar</DropdownItem>
              <DropdownItem key="cambiar estado">cambiar estado</DropdownItem>
              <DropdownItem key="borrar" className="text-danger" color="danger">
                borrar
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
      
                </TableCell>
              </TableRow>
            )
        }
     
        
      </TableBody>
    </Table>



    </div>
    </>
   
  )
}

export default AutosTable