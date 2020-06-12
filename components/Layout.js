
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

export const Layout = ({ children }) => 
{
    return (<>
        <Header />
        <Container>{ children }</Container>
        <Footer />
    </>);
};

export default Layout;
