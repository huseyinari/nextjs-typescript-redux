interface IContainer {
    children: React.ReactNode;
}
const Container: React.FC<IContainer> = ({ children }) => (
    <div className="container">
        { children }
    </div>
)
export default Container;