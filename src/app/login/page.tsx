"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import backendApi from "../../../config/axios";
import { TbEye, TbEyeClosed, TbLock, TbUser } from "react-icons/tb";
import { extractNumbers, formatRut } from "@/utils";
import Image from "next/image";
import AuthLayout from "@/components/layout/views/AuthLayout";
import MainContainer from "@/components/layout/page/MainContainer";
import Link from "next/link";
import { useGlobalStore } from "@/store/globalStore";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [rut, setRut] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const { setToken } = useGlobalStore();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await backendApi.post("/auth/login", { rut: extractNumbers(rut), password })
            .then(response => {
                setToken(response.data.token)
                router.push("/home");
            })
            .catch(error => {
                console.log('error en /auth/login', error);
                alert("Credenciales incorrectas");
            });
    }

    return (
        <MainContainer>
            <AuthLayout
                info={
                    <Image src="https://contablexpert.cl/wp-content/uploads/2025/06/contablexpert.svg" width={200} height={60} className="invert cursor-pointer" alt="Company icon" />
                }
            >
                <form onSubmit={handleLogin} className="min-w-96 md:order-2 flex flex-col py-10 px-10 rounded-2xl border">
                    <div className="flex flex-col gap-5 mb-5">
                        <InputField
                            value={rut}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRut(formatRut(e.target.value))}
                            label=''
                            inputMode="numeric"
                            type="text"
                            id="rut"
                            placeholderIcon={<TbUser />}
                            placeholder="12.345.678-9"
                        />
                        <div className="relative">
                            <InputField
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                label=''
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholderIcon={<TbLock />}
                                placeholder="Contraseña"
                                className="pe-13"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-2xl">
                                {showPassword ? <TbEyeClosed /> : <TbEye />}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-end text-sm">
                        <Link href={'/forgotpassword'} className="cursor-pointer text-blue-600 underline hover:text-blue-800 select-none">Olvide mi contraseña</Link>
                    </div>
                    <Button onClick={() => { }} text={'Iniciar sesión'} className="my-5" />
                    <p className="text-center">
                        ¿No tienes cuenta?
                        <Link href="/signup" className="ms-4 text-blue-600 underline cursor-pointer select-none hover:text-blue-800">
                            Regístrate aquí
                        </Link>
                    </p>
                </form>
            </AuthLayout>
        </MainContainer>
    );
}