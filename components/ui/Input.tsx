interface inputProps {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
}

const Input = ({
    name, 
    type,  
    placeholder, 
    value,
}: inputProps) => {
    return (
        <input
        className="w-full p-2 border-2 border-gray-300"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        />
    )
};

export default Input;