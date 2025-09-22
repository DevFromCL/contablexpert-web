import { ChangeEvent } from "react";

interface InputFieldProps  {
  id: string;
  label: string;
  type?: string; // "text" por defecto
  placeholder?: string;
  placeholderIcon?: React.ReactNode; // por si es un ícono de React
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  inputMode?: "text" | "search" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;
  className?: string;
  autoFocus?: boolean;
}

const InputField:React.FC<InputFieldProps> = ({ id, label, type = "text", inputMode, placeholder, placeholderIcon, value, onChange, autoComplete = "off", className, autoFocus }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <div className="relative">
                <div className='absolute left-3 top-1/2 -translate-y-1/2 opacity-70'>
                    {placeholderIcon}
                </div>
                <input
                    value={value}
                    onChange={onChange}
                    type={type} 
                    id={id}
                    autoFocus={autoFocus}
                    inputMode={inputMode}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    className={`p-3 ps-9 rounded-2xl bg-[#c4c4c4] dark:bg-[#181818] outline-none focus:outline-none focus:bg-[#ffffff] dark:focus:bg-[#383838] border border-[#333] w-full ${className}`}
                />
            </div>
        </div>
    );
};

export default InputField;
