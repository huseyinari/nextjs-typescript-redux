interface IInputGroupText {
    text: string;
}
const InputGroupText: React.FC<IInputGroupText> = ({ text }) => {
    return (
        <span className="input-group-text"> { text } </span>
    )
}
export default InputGroupText;