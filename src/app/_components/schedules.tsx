import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function Schedules() {
  return (
     <Card className='border-gray-03 h-28 bg-secondary-black' >
      <CardContent className='p-5 flex  justify-between py-0'>
        <div className='flex flex-col gap-2 py-5'>
          <Badge variant="secondary" className='bg-dark-purple font-bold  text-sx text-primary-purple hover:bg-primary-purple hover:text-white w-max'>
          Confirmado 
        </Badge>
        <h1 className='text-white text-base font-bold'>Corte de cabelo</h1>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" alt="shadcn" />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
          <h2 className= "text-white text-base">Vintage Barber</h2>
          
        </div>
        </div>
       <div className="flex flex-col h-28 items-center justify-center px-3 border-l border-solid border-gray-03 text-white">
            <p className="text-sm font-semibold">Fevereiro</p>
              <p className="text-2xl font-normal">21</p>
              <p className="text-sm font-normal">09:58</p>
        </div>
      </CardContent>
      </Card>
  )
}
