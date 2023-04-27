export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    INFO = 'info',
    LIGHT = 'light',
    DARK = 'dark',
}
interface IButton {
    text: string;
    type: ButtonType
    onClick?: Function;
}
const Button: React.FC<IButton> = ({ text, type, onClick }) => {
    return (
        <button 
            type="button" 
            className={`btn btn-${type}`} 
            onClick={() => onClick && onClick()}
        >
            { text }
        </button>
    )
}
export default Button;