'use client';

import { useGlobalStore } from "@/store/globalStore";

export default function HomePage() {
    const { accessToken } = useGlobalStore();

    console.log("Access Token:", accessToken);

    return (
        <section className="p-10">
            <h1 className="text-3xl font-bold">Página privada: Home</h1>
            <p>Solo puedes verla si has iniciado sesión.</p>
            <p>AccesToken: {accessToken}</p>
        </section>
    );
}
