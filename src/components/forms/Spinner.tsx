interface ISpinner {
    
}
const Spinner: React.FC<ISpinner> = () => (
    <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden" />
    </div>
)
export default Spinner;