import { db } from '@/app/_lib/prisma'
import React from 'react'

interface BarbershopPageProps {
  params: {
    id:string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  //chamar o meu banco de dados
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    }
  })
  return (
    <div >
      <h1 className='text-white'>{ barbershop?.name}</h1>
    </div>
  )
}
export default BarbershopPage