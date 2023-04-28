import Link from "next/link";

interface INavbar {

}
const Navbar: React.FC<INavbar> = () => (
    <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
            <Link className="p-2 link-secondary" href="/post/add">Gönderi Ekle</Link>
            <Link href="#" className="p-2 link-secondary"><span>U.S.</span></Link>
            <Link href="#" className="p-2 link-secondary"><span>Technology</span></Link>
            <Link href="#" className="p-2 link-secondary"><span>Design</span></Link>
            <Link href="#" className="p-2 link-secondary"><span>Culture</span></Link>
        </nav>
    </div>
)
export default Navbar;