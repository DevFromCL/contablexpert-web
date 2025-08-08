const InputField = ({ id, label, type = "text", placeholder, value, onChange }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <input value={value} onChange={onChange} type={type} id={id} placeholder={placeholder} className="border p-2 rounded" />
        </div>
    );
};

export default InputField;
