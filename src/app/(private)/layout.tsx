"use client";

import { useGlobalStore } from "@/store/globalStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    const { accessToken, clearAuth } = useGlobalStore();
    const isHydrated = useGlobalStore.persist.hasHydrated();

    useEffect(() => {
     if(isHydrated){
         if (!accessToken) {
             router.replace("/login");
         } else {
             setIsAuth(true);
         }
     }
    }, [router, accessToken, isHydrated]);

    if (isAuth === null || !isHydrated) {
        return <p className="p-10">Verificando autenticación...</p>;
    }

    return (
        <div>
            <nav className="bg-blue-500 p-4 flex gap-4">
                <a href="/home">Home</a>
                <button
                    onClick={() => {
                        clearAuth()
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
