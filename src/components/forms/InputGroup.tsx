interface IInputGroup {
    type: string;
    children: React.ReactNode;
}
const InputGroup: React.FC<IInputGroup> = ({ type, children }) => {
    return (
        <div className={`input-group ${type}`}>
            { children }
        </div>
    )
}
export default InputGroup;