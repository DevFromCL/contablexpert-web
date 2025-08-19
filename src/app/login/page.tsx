"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsFillEnvelopeFill, BsLock } from "react-icons/bs";
import backendApi from "../../../config/axios";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        backendApi.post("/auth/login", { email, password })
        .then(response => {
            console.log({response});
            localStorage.setItem("user", JSON.stringify({ email, password }));
            router.push("/home");
        })
        .catch(error => {
            console.log({error});
            alert("Credenciales incorrectas");
        });
    }

    return (
        <section className="flex items-center justify-center h-screen bg-[#181818] text-white ">
            <form onSubmit={handleLogin} className="flex flex-col gap-9 bg-[#212121] py-20 px-10 rounded-2xl border border-[#333]">
                <h1 className="text-5xl font-bold ">Bienvenido 👋</h1>
                {/* <p className="text-gray-400">(admin@gmail.com, 123)</p> */}
                <div className="flex flex-col gap-5">
                    <InputField 
                        value={email}  
                        autoComplete='on' 
                        onChange={e => setEmail(e.target.value)} 
                        label='' 
                        type="text" 
                        id="email" 
                        placeholderIcon={<BsFillEnvelopeFill />}
                        placeholder="Correo" 
                    />
                    <InputField 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        label='' 
                        type="password" 
                        id="password"
                        placeholderIcon={<BsLock />}
                        placeholder="Contraseña" 
                    />
                </div>
                <Button onClick={() => {}} text={'Login'} />
            </form>
        </section>
    );
}