import { Barbershop } from "@prisma/client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { FaStar } from "react-icons/fa";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

export default function BarbershopItem({ barbershop }: BarbershopItemProps) {
  return (
    <Card className="h-[291px] min-w-40 border-gray-01">
      <CardContent className="p-0">
        <div className="relative h-40 w-full">
           <div className="absolute top-2 left-2 z-50 rounded-2xl bg-dark-purple text-primary-purple">
        <Badge  className="flex gap-1 items-center top-3 left-3 ">
              <FaStar className='bg-dark-purple' size={12} />
              <span className='text-xs font-bold text-white'>5,0</span>
            
          </Badge>
          </div>
          <Image
            fill
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
            alt={barbershop.name}
          />
        </div>
        <div className="px-3 pt-3">
          <h2 className="overflow-hidden text-ellipsis text-nowrap text-base font-bold text-white">
            {barbershop.name}
          </h2>
          <p className="mb-2 overflow-hidden text-ellipsis text-nowrap text-xs font-normal text-gray-03">
            {barbershop.address}
          </p>

          <Button
            variant="secondary"
            className="mt-3 w-full bg-gray-02 px-2 font-bold text-white"
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
