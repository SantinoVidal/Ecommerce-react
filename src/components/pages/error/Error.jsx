import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div>
      <div className="container">
        <div className="errorType">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dhghrffht/image/upload/v1688602719/majestic-removebg-preview_1_rhpn4n-fotor-20230705211818_cckjch.png"
              alt="Majestic Logo"
            />
          </Link>
          <h3 style={{ marginTop: "0.5rem", marginLeft: "2rem" }}>
            Error 404 Page Not Found
          </h3>
        </div>

        <h1 style={{ fontSize: "8rem", marginTop: "2rem" }}>Sorry!</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <h2
            style={{
              paddingRight: "30rem",
              lineHeight: "3rem",
              marginTop: "1rem",
              color: "#EC6F66",
            }}
          >
            The page you are looking for, was just eaten by this cute kitty!
            <h3
              style={{ color: "black", marginTop: "1rem", fontSize: "1.5rem" }}
            >
              These links may help instead:
              <div
                style={{
                  marginTop: "1rem",
                  fontSize: "1.3rem",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "grey",
                  }}
                  to="/"
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    <p>Home</p>
                  </li>
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "grey",
                  }}
                  to="/category/earrings"
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    <p>Earrings</p>
                  </li>
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "grey",
                  }}
                  to="/category/necklaces"
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    <p>Necklaces</p>
                  </li>
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "grey",
                  }}
                  to="/category/rings"
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    <p>Rings</p>
                  </li>
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "grey",
                  }}
                  to="/category/bracelets"
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    <p>Bracelets</p>
                  </li>
                </Link>
              </div>
            </h3>
          </h2>
          <img
            style={{
              width: "38rem",
              height: "37rem",
              marginTop: "-12rem",
              marginLeft: "-25rem",
            }}
            src="https://res.cloudinary.com/dhghrffht/image/upload/v1688611194/f7e741d04baebfc12ea41a3e400c11f3_zdpdff.jpg"
            alt="Kitty"
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
