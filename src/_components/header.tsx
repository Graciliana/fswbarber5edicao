import { Button } from './ui/button';
import Image from 'next/image';
import * as React from 'react';
import { TiThMenu } from "react-icons/ti";


export function Header() {
  return (
    <div className="h-22 py-6 px-5 flex flex-row border-b border-gray-01 items-center justify-between">
      <Image src="/logo.svg" alt="FSW Barber" height={22} width={120} /> 
      <Button variant="outline" size='icon'>
          <TiThMenu  className="text-white" size={20} />
        </Button>
    </div>
          
      
  );
}; 
