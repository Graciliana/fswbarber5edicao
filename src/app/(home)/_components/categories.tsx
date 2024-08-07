
import { Button } from '@/app/_components/ui/button';
import * as React from 'react';
import { FaScissors } from 'react-icons/fa6';

export default function Categories(){
  return (
    <div className='grid grid-cols-3 gap-3 text-white  pl-5'>
      <Button className='bg-secondary-black border border-gray-03 rounded-lg text-sm h-10  font-bold gap-2'>
        <FaScissors />
        Cabelo</Button>
      <Button className='bg-secondary-black border border-gray-03 rounded-lg text-sm h-10  font-bold gap-2'>
       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1567_15164)">
<path d="M14.5455 7.27288C13.0909 7.27288 12.3636 5.09106 10.1818 5.09106C8 5.09106 8 6.54561 8 6.54561C8 6.54561 8 5.09106 5.81818 5.09106C3.63636 5.09106 2.90909 7.27288 1.45455 7.27288C0.727273 7.27288 0 6.54561 0 6.54561C0 6.54561 0.727273 10.182 3.63636 10.182C7.27273 10.182 8 8.00016 8 8.00016C8 8.00016 8.72727 10.182 12.3636 10.182C15.2727 10.182 16 6.54561 16 6.54561C16 6.54561 15.2727 7.27288 14.5455 7.27288Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1567_15164">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

        Barba</Button>
      <Button className='bg-secondary-black border gap-1 border-gray-03 rounded-lg text-sm h-10   gay-2 font-bold'> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1567_15132)">
<path d="M14.4 4.7999C13.96 4.7999 13.6 4.4399 13.6 3.9999C13.6 3.5599 13.96 3.1999 14.4 3.1999V2.3999H1.6V3.1999C2.04 3.1999 2.4 3.5599 2.4 3.9999C2.4 4.4399 2.04 4.7999 1.6 4.7999H0V10.3999H1.6C2.04 10.3999 2.4 10.7599 2.4 11.1999C2.4 11.6399 2.04 11.9999 1.6 11.9999V12.7999H14.4V11.9999C13.96 11.9999 13.6 11.6399 13.6 11.1999C13.6 10.7599 13.96 10.3999 14.4 10.3999H16V4.7999H14.4ZM14.4 7.9999H13.6V8.7999H12V7.9999H9.128C8.96 8.4639 8.52 8.7999 8 8.7999C7.48 8.7999 7.04 8.4639 6.872 7.9999H4V8.7999H2.4V7.9999H1.6V7.1999H2.4V6.3999H4V7.1999H6.872C7.04 6.7359 7.48 6.3999 8 6.3999C8.52 6.3999 8.96 6.7359 9.128 7.1999H12V6.3999H13.6V7.1999H14.4V7.9999Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1567_15132">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg> 
        Acabamento</Button>
    </div>
  );
};