// components
import Navbar from '@/src/components/layouts/Navbar';
import Header from '@/src/components/layouts/Header';
import Container from '@/src/components/layouts/Container';
import Footer from '@/src/components/layouts/Footer';

interface IRootLayout {
    children: React.ReactNode;
}
const RootLayout: React.FC<IRootLayout> = ({ children }) => (
    <>
        <Container>
            <Header />
            <Navbar />
        </Container>
        <main className='container'>
            { children }
        </main>
        <Footer />
    </>
);

export default RootLayout;