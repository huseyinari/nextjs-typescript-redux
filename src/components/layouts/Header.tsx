import Link from "next/link";
import styles from "../../../styles/Header.module.css";    {/* Module CSS Kullanımı */}

interface IHeader {

}
const Header: React.FC<IHeader> = () => {
    return (
        <header className="blog-header lh-1 py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <Link href="/" className="link-secondary"> Anasayfa </Link>
                </div>

                <div className="col-4 text-center">
                    <Link href="#" className={styles.headerText}> <span>DIGIFINANS</span> </Link> {/* Module CSS Kullanımı */}
                </div>

                <div className="col-4 d-flex justify-content-end align-items-center">
                    <Link href="#" className="link-secondary" aria-label="Search">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width={20}
                            height={20}
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="mx-3"
                            role="img"
                            viewBox="0 0 24 24"
                        >
                            <title>Search</title>
                            <circle cx={10.5} cy={10.75} r={7.5}></circle>
                            <path d="M21 21l-5.2-5.2"></path>
                        </svg>
                    </Link>
                    <Link href="#" className="btn btn-sm btn-outline-secondary">
                        <span>Kaydol</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header;