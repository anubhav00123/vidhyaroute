import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { PiClockLight } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      {/* Top Navbar */}
      <div className="navbar-top">
        <div className="left-info">
          <div className="info-item">
            <HiOutlineMail /> info@yourmail.com
          </div>
          <div className="info-item">
            <GoLocation /> 12 Queen Park, LA, USA
          </div>
          <div className="info-item">
            <PiClockLight /> Mon - Sat: 9.00 to 18.00
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
          <div className="nav-links">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/coaching" className="nav-link">
              Coaching
            </Link>
            <Link href="/countries" className="nav-link">
              Countries
            </Link>
            <Link href="/visa" className="nav-link">
              Visa
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/contact" className="nav-link">
              Contact Us
            </Link>
          </div>
          <div className="profile-section">
            <img src="https://i.imgur.com/4g5d77R.png" alt="Profile" />
            <div className="profile-text">
              <p>ENQUIRIES</p>
              <p>+1-888-456-78-901</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
