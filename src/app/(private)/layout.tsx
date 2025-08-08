"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            router.replace("/login");
        } else {
            setIsAuth(true);
        }
    }, [router]);

    if (isAuth === null) {
        return <p className="p-10">Verificando autenticación...</p>;
    }

    return (
        <div>
            <nav className="bg-blue-500 p-4 flex gap-4">
                <a href="/home">Home</a>
                <button
                    onClick={() => {
                        localStorage.removeItem("user");
                        router.replace("/");
                    }}
                >
                    Cerrar sesión
                </button>
            </nav>
            {children}
        </div>
    );
}
