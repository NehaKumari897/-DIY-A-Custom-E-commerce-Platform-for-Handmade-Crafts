import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children, className }: Props) => {
  return (
    <h2 className={cn("text-3xl font-semibold", className)}>{children}</h2>
  );
};

const SubTitle = ({ children, className }: Props) => {
  return (
    <h3 className={cn("font-semibold text-gray-900 fonts-sans", className)}>{children}</h3>
  );
};

const SubText =({ children, className 

}:{
  children: React.ReactNode;
  className?: string;
})=>{
  return(
    <p className={cn("text-gray-600 text-sm",className)}>{children}</p>
  )
}

export {Title, SubTitle,SubText };