import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;