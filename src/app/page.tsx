"use client";

import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="bg-[#242424] text-white w-screen h-screen  ">
        <div className="bg-[#212121] bg-cover bg-center h-screen w-full">
          <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-40 xl:px-56 bg-[#181818] shadow-md">
            <Link href="/">
              <img src="https://contablexpert.cl/wp-content/uploads/2025/06/contablexpert.svg" className="h-15 invert cursor-pointer" />
            </Link>
            <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer outline-none focus:ring-2 focus:ring-blue-400">Iniciar sesión</Link>
          </header>
          <main className="flex items-center justify-center h-[calc(100vh-100px)]">
            <h1 className="text-5xl font-bold">Sitio en construccion</h1>
          </main>
        </div>
      </div>
    </>
  );
}