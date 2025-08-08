import Link from "next/link";

export default function NotFoundPage() {
    return (
        <section className="p-10 text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p>Página no encontrada</p>
            <Link href="/" className="text-blue-500 underline">Volver al inicio</Link>
        </section>
    );
}
