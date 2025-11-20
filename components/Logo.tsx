import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const Logo = ({className,spanDesign}:{className?:string,spanDesign?:string}) => {
  return (
   <Link href={"/"} className ="inline-flex">
   <h2 className={cn("text-2xl text-shadow-pink-600 font-black tracking-wider uppercase hover:text-shadow-pink-400 hoverEffect group  font-sans" , className)}>
    DI 
    <span className={cn("text-shadow-pink-400 group-hover:text-shadow-pink-600 hoverEffect",
      spanDesign
      )} >
      Y
      </span></h2>
   </Link>
  );
};

export default Logo;