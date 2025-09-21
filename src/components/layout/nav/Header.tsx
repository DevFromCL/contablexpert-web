import ThemeToggle from "@/components/ui/ThemeToggle"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-background-secondary flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-40 xl:px-56 shadow-md">
            <Link href="/">
                <Image src="https://contablexpert.cl/wp-content/uploads/2025/06/contablexpert.svg" width={200} height={60} className=" cursor-pointer dark:invert" alt="Company icon" />
            </Link>
            <div className="flex gap-2">
                <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer outline-none focus:ring-2 focus:ring-blue-400">Iniciar sesión</Link>
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header