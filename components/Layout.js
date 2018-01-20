import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className='container'>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;