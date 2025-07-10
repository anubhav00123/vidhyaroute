import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { PiClockLight } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="navbar-top">
        <div className="left-info">
          <div className="info-item">
            <HiOutlineMail /> <span className="info-text">info@yourmail.com</span>
          </div>
          <div className="info-item">
            <GoLocation /> <span className="info-text">12 Queen Park, LA, USA</span>
          </div>
          <div className="info-item">
            <PiClockLight /> <span className="info-text">Mon - Sat: 9.00 to 18.00</span>
          </div>
        </div>
        <div className="right-info">
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <BsSearch />
          </div>
          <button className="appointment-btn">Appointment</button>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="navbar-bottom">
        <div className="nav-empty"></div>
        <div className="navbar-bottom-wrapper">
          {/* Profile Section */}
          <div className="profile-section">
            <img src="https://i.imgur.com/4g5d77R.png" alt="Profile" />
            <div className="profile-text">
              <p>ENQUIRIES</p>
              <p>+1-888-456-78-901</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            <Link href="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
            <Link href="/coaching" className="nav-link" onClick={closeMenu}>
              Coaching
            </Link>
            <Link href="/countries" className="nav-link" onClick={closeMenu}>
              Countries
            </Link>
            <Link href="/visa" className="nav-link" onClick={closeMenu}>
              Visa
            </Link>
            <Link href="/blog" className="nav-link" onClick={closeMenu}>
              Blog
            </Link>
            <Link href="/contact" className="nav-link" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Navbar;