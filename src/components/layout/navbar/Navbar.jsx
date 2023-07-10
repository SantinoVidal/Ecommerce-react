import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <a className="navbar-brand">
                <Link to="/">
                  <img
                    className="logo"
                    src="https://res.cloudinary.com/dhghrffht/image/upload/v1688514237/majestic-removebg-preview_1_rhpn4n.png"
                    alt="Majestic logo"
                  />
                </Link>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul className="navbar-nav">
                <Link to="/">
                  <li className="nav-item">
                    <a className="nav-link">Home</a>
                  </li>
                </Link>
                <Link to="/category/earrings">
                  <li className="nav-item">
                    <a className="nav-link">Earrings</a>
                  </li>
                </Link>
                <Link to="/category/necklaces">
                  <li className="nav-item">
                    <a className="nav-link">Necklaces</a>
                  </li>
                </Link>
                <Link to="/category/rings">
                  <li className="nav-item">
                    <a className="nav-link">Rings</a>
                  </li>
                </Link>
                <Link to="/category/bracelets">
                  <li className="nav-item">
                    <a className="nav-link">Bracelets</a>
                  </li>
                </Link>
                <Link to="/aboutUs">
                  <li className="nav-item">
                    <a className="nav-link">About us</a>
                  </li>
                </Link>
                <li className="nav-item">
                  <CartWidget />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
