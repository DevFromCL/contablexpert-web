import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[#242424] text-white w-screen  h-screen">
        <div className="bg-[url('https://contablexpert.cl/wp-content/uploads/2025/06/cosmos_ultra_opt.webp')] bg-cover bg-center h-screen w-full">
          <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-40 xl:px-56 bg-[#111264] shadow-md">
            <h1 className="font-bold text-4xl">ContableXpert</h1>
            <Link href="/login" className="text-blue-500 underline">Iniciar sesión</Link>
          </header>
          <main className="flex items-center justify-center h-[calc(100vh-100px)]">
            <h1 className="text-5xl font-bold">Sitio en construccion</h1>
          </main>
        </div>
      </div>
    </>
  );
}
