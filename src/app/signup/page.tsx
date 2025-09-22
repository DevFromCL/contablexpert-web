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
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

export default function SignupPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [rut, setRut] = useState("");
    const [email, setEmail] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [steps, setSteps] = useState(1);

    const cleanValues = () => {
        setSteps(1);
        setRut("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rutValue = e.target.value;
        setRut(formatRut(rutValue));
    };

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!password || !rut || !email) {
            alert("Por favor, completa todos los campos");
            return;
        }
        if (password !== passwordConfirm) {
            alert("Las contraseñas no coinciden");
            return;
        }
        await backendApi.post("/auth/signup", { rut: extractNumbers(rut), email, password })
            .then(response => {
                cleanValues()
                setSteps(2)
            })
            .catch(error => {
                console.log('Error /auth/signup', error);
                alert("Error al registrar el usuario: ");
            });
    }

    return (
        <MainContainer>
            <AuthLayout
                info={
                    <Image src="https://contablexpert.cl/wp-content/uploads/2025/06/contablexpert.svg" width={200} height={60} className="invert cursor-pointer" alt="Company icon" />
                }
            >
                {steps === 1 &&
                    <form onSubmit={handleSignUp} className="min-w-96 md:order-2 flex flex-col py-10 px-10 rounded-2xl border">
                        <div className="flex flex-col gap-5 mb-5">
                            <InputField
                                value={rut}
                                onChange={handleChange}
                                label=''
                                inputMode="numeric"
                                type="text"
                                id="rut"
                                placeholderIcon={<TbUser />}
                                placeholder="12.345.678-9"
                            />
                            <InputField
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                label=''
                                inputMode="email"
                                type="email"
                                id="email"
                                placeholderIcon={<HiOutlineMail />}
                                placeholder="email@example.com"
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
                            <div className="relative">
                                <InputField
                                    value={passwordConfirm}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value)}
                                    label=''
                                    type={showPasswordConfirm ? 'text' : 'password'}
                                    id="passwordConfirm"
                                    placeholderIcon={<TbLock />}
                                    placeholder="Confirmar contraseña"
                                    className="pe-13"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPasswordConfirm((prev) => !prev)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-2xl">
                                    {showPasswordConfirm ? <TbEyeClosed /> : <TbEye />}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => setRememberMe((prev) => !prev)}>
                                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe((prev) => !prev)} />
                                <p>Recordar sesión</p>
                            </div>
                            <Link href={'/forgotpassword'} className="cursor-pointer text-blue-600 underline hover:text-blue-800 select-none">Olvide mi contraseña</Link>
                        </div>
                        <Button onClick={() => { }} text={'Registrarse'} className="my-5" />
                        <p className="text-center">
                            ¿Ya tienes cuenta?
                            <Link href="/login" className="ms-4 text-blue-600 underline cursor-pointer select-none hover:text-blue-800">
                                Inicia sesión aquí
                            </Link>
                        </p>
                    </form>}

                {steps === 2 &&
                    <div className="min-w-96 md:order-2 flex flex-col py-10 px-10 rounded-2xl border text-center gap-5">
                        <p>Registrado con exito!</p>
                        <Button onClick={() => {
                            router.push("/login");
                         }} text="Ir a la página de inicio de sesión"/>
                    </div>}

            </AuthLayout>
        </MainContainer>
    );
}