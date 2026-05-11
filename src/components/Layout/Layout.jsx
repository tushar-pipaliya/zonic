// src/components/Layout/Layout.jsx

import Navbar from './Navbar'; // Path tamara mujab check karjo
import Footer from './Footer';

const Layout = ({ children }) => { 
  return (
    <div className="layout-wrapper">
      <Navbar />

      <main>
        {children} 
      </main>

      <Footer/>
    </div>
  );
};

export default Layout;