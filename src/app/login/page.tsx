"use client";

import InputField from "@/components/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        if (email === "admin@gmail.com" || password === "123") {
            localStorage.setItem("user", JSON.stringify({ email, password }));
            router.push("/home");
        } else {
            alert("Credenciales incorrectas");
        }
    }

    return (
        <section className="flex items-center justify-center h-screen">
            <div className="flex flex-col gap-5">
                <h1 className="text-3xl font-bold">Iniciar sesión</h1>
                <p className="text-gray-400">(admin@gmail.com, 123)</p>
                <InputField value={email} onChange={e => setEmail(e.target.value)} label='Correo' type="text" id="email" placeholder="Correo" />
                <InputField value={password} onChange={e => setPassword(e.target.value)} label='Contraseña' type="text" id="password" placeholder="Contraseña" />
                <button
                    onClick={handleLogin}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Login
                </button>
            </div>
        </section>
    );
}