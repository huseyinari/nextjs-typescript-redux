import Link from "next/link";

interface IFooter {

}
const Footer: React.FC<IFooter> = ({  }) => {
    return (
        <footer className="footer-container">
            <p>
                Blog template built for <a href="#"> <span>Bootstrap</span> </a>
            </p>
            <p>
                <Link href="#"><span>Back To Top</span></Link>
            </p>

            {/* style jsx kullanımı */}
            <style jsx>{`
                .footer-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    background-color: #f9f9f9;
                    padding: 2.5rem 0;
                    text-align: center;
                    border-top: .05rem solid #e5e5e5;
                    color: #727272;
                }
            `}</style>
        </footer>
    )
}
export default Footer;