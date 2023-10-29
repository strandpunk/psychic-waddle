import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./Layout.css";
import Footer from "./Footer";

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
