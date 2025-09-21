import React, { ReactNode } from "react";
import Header from "../nav/Header";

type AuthLayoutProps = {
    children: ReactNode; // form en la izquierda
    info?: ReactNode;    // contenido de la derecha
};

const AuthLayout = ({ children, info }: AuthLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 hidden lg:flex items-center justify-center p-6 ">
                    <div className="max-w-lg">{info}</div>
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6  ">
                    <div className="w-full max-w-md">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;