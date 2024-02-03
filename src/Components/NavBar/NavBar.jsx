import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled beyond a certain threshold
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: "fixed",
    // display: "none",
    top: 0,
    width: "100%",
    backgroundColor: "#2c3e50",
    padding: isScrolled ? "10px 0" : "30px 0",
    transition: "padding 0.5s",
    zIndex: 1000,
  };

  return (
    <nav style={navbarStyle} className="navbar navbar-expand-lg ">
      <div className="container">
        <NavLink to="" className="logo">
          START FRAMEWORK
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item ">
              <NavLink to="about" className="nav_link">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="portfolio" className="nav_link">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact" className="nav_link">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
