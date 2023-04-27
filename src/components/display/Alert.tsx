interface IAlert {
    show: boolean;
    text: string;
}

const Alert: React.FC<IAlert> = ({ show, text }) => {
    if (!show)
        return null;

    return (
        <div className="alert alert-success">
            { text }
        </div>
    )
}
export default Alert;