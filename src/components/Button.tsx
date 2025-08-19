"use client";

const Button = ({onClick, text}) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
            {text}
        </button>
    )
}

export default Button;