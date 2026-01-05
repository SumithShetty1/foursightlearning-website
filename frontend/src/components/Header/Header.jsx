import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../images/4SightLearningLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Scroll helper: navigates to "/" first if not on home, then scrolls to section
  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      // Navigate to home and pass scrollToId in state
      navigate('/', { state: { scrollToId: id } });
    } else {
      // Smooth scroll if already on home page
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      closeMenu();
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <RouterLink to="/" onClick={closeMenu}>
            <img src={logo} alt="Foursight Logo" />
          </RouterLink>
        </div>

        {/* Navigation - Simplified without dropdowns */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li>
              <button className="nav-link" onClick={() => { scrollToSection('hero-section'); closeMenu(); }}>
                Home
              </button>
            </li>

            {/* About - Direct scroll */}
            <li>
              <button className="nav-link" onClick={() => { scrollToSection('about-company-section'); closeMenu(); }}>
                About
              </button>
            </li>

            {/* Services - Direct scroll */}
            <li>
              <button className="nav-link" onClick={() => { scrollToSection('services-section'); closeMenu(); }}>
                Services
              </button>
            </li>

            <li>
              <button className="nav-link" onClick={() => { scrollToSection('contact-section'); closeMenu(); }}>
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
