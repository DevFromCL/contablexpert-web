"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import backendApi from "../../../config/axios";
import Image from "next/image";
import AuthLayout from "@/components/layout/views/AuthLayout";
import MainContainer from "@/components/layout/page/MainContainer";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineNumbers } from "react-icons/md";

export default function SignupPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // try {
        //     await backendApi.post("/auth/forgot-password", { email });
            setStep(2);
        // } catch (error) {
        //     console.error("Error sending email:", error);
        // }
    };

    const handleVerifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // try {
        //     await backendApi.post("/auth/forgot-password/verify", { email, code });
        //     setStep(3);
        // } catch (error) {
        //     console.error("Error verifying code:", error);
        // }
    };

    return (
        <MainContainer>
            <AuthLayout
                info={
                    <Image src="https://contablexpert.cl/wp-content/uploads/2025/06/contablexpert.svg" width={200} height={60} className="invert cursor-pointer" alt="Company icon" />
                }
            >
                {step === 1 && (
                    <form onSubmit={handleSendMail} className="min-w-96 md:order-2 flex flex-col py-10 px-10 rounded-2xl border">
                        <div className="flex flex-col gap-5 mb-5">
                            <p className="text-center">Ingresa tu correo electrónico para recibir instrucciones de recuperación</p>
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
                        </div>
                        <Button onClick={() => { }} text={'Continuar'} className="my-5" />
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handleVerifyCode} className="min-w-96 md:order-2 flex flex-col py-10 px-10 rounded-2xl border">
                        <div className="flex flex-col gap-5 mb-5">
                            <p className="text-center">¡Ingresa el codigo que enviarmos a tu correo!</p>
                            <InputField
                                value={code}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                                label=''
                                inputMode="numeric"
                                type="numeric"
                                id="code"
                                placeholderIcon={<MdOutlineNumbers  />}
                                placeholder="1-2-3-4-5"
                            />
                        </div>
                        <Button onClick={() => { }} text={'Continuar'} className="my-5" />
                    </form>
                )}
            </AuthLayout>
        </MainContainer>
    );
}