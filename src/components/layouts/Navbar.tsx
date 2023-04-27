import Link from "next/link";

interface INavbar {

}
const Navbar: React.FC<INavbar> = () => (
    <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
            <Link className="p-2 link-secondary" href="/post/add">Post Ekle</Link>
            <a className="p-2 link-secondary"><span>U.S.</span></a>
            <a className="p-2 link-secondary"><span>Technology</span></a>
            <a className="p-2 link-secondary"><span>Design</span></a>
            <a className="p-2 link-secondary"><span>Culture</span></a>
        </nav>
    </div>
)
export default Navbar;