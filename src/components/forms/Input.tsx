interface IInput {
    value: string | undefined;
    placeholder?: string;
    onChange?: Function;
}
const Input: React.FC<IInput> = ({ value, placeholder, onChange }) => {
    return (
        <input type="text" className="form-control" placeholder={placeholder}  value={value} onChange={(e) => onChange && onChange(e.target.value)} />
    )
}
export default Input;