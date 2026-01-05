import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos/dist/aos"; // Vite-compatible import
import "aos/dist/aos.css";
import Header from "../components/Header/Header";
import Footer from "../Footer/Footer";
import "./FsLayout.css";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 120,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div className="fs-layout-container">
      <Header />
      <main className="fs-layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
