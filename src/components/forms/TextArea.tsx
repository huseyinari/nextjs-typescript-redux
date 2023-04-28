interface ITextArea {
    value: string | undefined;
    placeholder?: string;
    onChange?: Function;
}
const TextArea: React.FC<ITextArea> = ({ value, placeholder, onChange }) => {
    return (
        <textarea className="form-control" placeholder={placeholder} style={{height: 150}}  value={value} onChange={(e) => onChange && onChange(e.target.value)} />
    )
}
export default TextArea;