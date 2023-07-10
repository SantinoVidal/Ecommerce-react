import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <h3
          style={{
            fontSize: "2.5rem",
            color: "#111111",
            fontWeight: "800",
            marginTop: "0rem",
            marginBottom: "1rem",
            fontStyle: "italic",
          }}
        >
          #SparkleYourStyle
        </h3>

        <Link to="/">
          <div className="logoFooter">
            <h3
              style={{
                color: "#ffffff",
                fontWeight: "550",
              }}
            >
              Be{" "}
              <img
                src="https://res.cloudinary.com/dhghrffht/image/upload/v1688514338/majestic-removebg-preview_1_rhpn4n.png"
                alt="Majestic logo"
              />
            </h3>
          </div>
        </Link>

        <div className="media">
          <a
            href="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              src="https://res.cloudinary.com/dhghrffht/image/upload/v1689024233/icons8-instagram-100_lu6qjo.png"
              alt="Instagram"
            />
          </a>

          <a
            href="http://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              src="https://res.cloudinary.com/dhghrffht/image/upload/v1689024232/icons8-twitter-cuadrado-100_wrq1lu.png"
              alt="Twitter"
            />
          </a>

          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              src="https://res.cloudinary.com/dhghrffht/image/upload/v1689024232/icons8-facebook-100_yguakw.png"
              alt="Facebook"
            />
          </a>
        </div>

        <div>
          <h5 style={{ color: "#111111", fontWeight: "600" }}>
            © 2023 MAJESTIC.
          </h5>
          <h5>Website developed by Santino Vidal Gallea</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
