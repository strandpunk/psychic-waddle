import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Layout.css";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="content-container">
        <main className="layout-container">
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
