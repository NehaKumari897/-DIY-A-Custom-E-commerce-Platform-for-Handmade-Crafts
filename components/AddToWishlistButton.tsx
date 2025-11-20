import { cn } from '@/lib/utils';
import { Product } from '@/sanity.types';
import { Heart } from 'lucide-react';
import React from 'react';

const AddToWishlistButton = ({
    product,
  className,
}: {
  product: Product;
  className?: string;

}) => {
  return (
    <div className={cn("absolute top-2 right-2 hover:cursor-pointer z-10", className)}>
        <button 
        // onClick={handleFavorite}
         className={`p-2.5 rounded-full hover:bg-shadow-rose-600  hover:text-white   bg-shadow-pink-600/20 hoverEffect `}>
        <Heart  size={15} />
   </button>
    </div>
  );
};

export default AddToWishlistButton;