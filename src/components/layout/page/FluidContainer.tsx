"use client";

import { ReactNode } from "react";

type FluidContainerProps = {
  children: ReactNode;
  className?: string;
};

const FluidContainer = ({ children, className = "" }: FluidContainerProps) => {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default FluidContainer