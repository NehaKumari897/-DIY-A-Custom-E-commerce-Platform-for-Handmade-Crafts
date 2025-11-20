import { productType } from '@/constants/data';
import Link from 'next/link';
import React from 'react';
interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
    return (
    <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-1.5 text-sm font-semibold">
           {productType?.map((item) => (
            <button
            onClick={() => onTabSelect(item?.title)}
              key={item?.title}
              className={`border border-shadow-pink-400/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shadow-pink-400 hover:border-shadow-pink-400 hover:text-white hoverEffect
                ${selectedTab === item?.title ? "bg-shadow-pink-400 text-white border-shadow-pink-400" : "bg-shadow-pink-400/10"}
                 `}
            >
              {item?.title}
            </button>
          ))}
            </div>
           <Link href={"/shop"}
           className="border border-shadow-pink-400/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shadow-pink-400 hover:border-shadow-pink-400 hover:text-white hoverEffect"
           >See all</Link> 
        
    </div>
  );
};

export default HomeTabBar;