"use client";

interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
    className: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white px-4 py-2 rounded cursor-pointer outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${className}`}
        >
            {text}
        </button>
    )
}

export default Button;