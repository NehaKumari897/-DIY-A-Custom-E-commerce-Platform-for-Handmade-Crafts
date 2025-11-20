import { Product } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Flame, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Title } from './text';
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';
import ProductSideMenu from './ProductSideMenu';

const ProductCard = ( { product }: { product: Product }) => {
  return (
    <div className="text-sm border-[1px] rounded-md border-shadow-pink-600/20 group bg-white group">
        <div className="relative group overflow-hidden bg-shop_light_bg">
            {product?.images &&(
           <Link href={`/product/${product?.slug?.current}`}>
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="ProductImage"
            loading="lazy"
            width={500}
            height={500}
            className={`w-full h-64 object-contain overflow-hidden
       transition-transform bg-shop_light_bg hoverEffect
              ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
          />
          </Link>
        )}
        <ProductSideMenu product={product} />
         {product?.status === "sale" && (
          <p
            className="absolute top-2 left-2 z-10 text-xs 
           bg-shadow-pink-600/20        
           text-black             
           px-2 py-1              
           rounded-full 
           hover:bg-shadow-pink-400 
           hover:text-white     
           hoverEffect"
          >
            Sale!
          </p>
        )}
         {product?.status === "new" && (
          <p
            className="absolute top-2 left-2 z-10 text-xs border
           bg-shadow-pink-600/20        
           text-black             
           px-2 py-1              
           rounded-full 
           hover:bg-shadow-pink-400 
           hover:text-white
            hoverEffect"
          >
            New!
          </p>
        )}
        {product?.status === "hot" && (
          <Link
            href={"/deal"}
            className="absolute top-2 left-2 z-10 border
              bg-shadow-pink-600/20        
           text-shop_orange             
           px-2 py-1              
           rounded-full 
           hover:bg-shop_orange 
           hover:text-white
           
               hoverEffect"
          >
            <Flame size={18} fill="#fb6c08" className="" />
          </Link>
        )}
        </div>
        <div className="py-3 flex flex-col gap-2" >
          {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs font-medium text-shop_light_text">
            {product?.categories?.map((cat) => cat).join(", ")}
          </p>
        )}
                <Title className="text-sm line-clamp-1">{product?.name}</Title>
                <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                size={12}
                key={index}
                className={
                  index < 4
                    ? "text-shop_lighter_green"
                    : " text-shop_lighter_text"
                }
                fill={index < 4 ? "#93D991" : "#ababab"}
              />
            ))}
          </div>
          <p className="text-shop_light_text text-xs tracking-wide">
            5 Reviews
          </p>
        </div>
         <div className="flex items-center gap-2.5">
          <p className="font-medium">In Stock</p>
           <p className={`${product?.stock === 0 ? "text-red-600" : 
           "text-shop_light_green font-semibold"}`}
          >
            {(product?.stock as number) > 0 ? product?.stock : "unavailable"}
          </p>
        </div>
         <PriceView
        price={product?.price}
        discount={product?.discount}
        className="text-sm"
        />
        <AddToCartButton product={product} className="w-36 rounded-full"/>
          </div>
    </div>
  );
};

export default ProductCard;