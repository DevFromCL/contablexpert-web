"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <html>
            <body className="p-10">
                <h1 className="text-2xl font-bold text-red-500">Ocurrió un error</h1>
                <p>{error.message}</p>
                <button onClick={reset} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Reintentar
                </button>
            </body>
        </html>
    );
}
