import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
  className?: string;
};

const MainContainer = ({ children, className }: Props) => {
  return (
    <div className={`min-h-screen bg-background text-text ${className}`}>
        {children}
    </div>
  )
}

export default MainContainer