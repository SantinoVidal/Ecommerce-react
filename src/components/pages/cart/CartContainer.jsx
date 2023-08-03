import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import "./cartModule.css";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  let limpiar = () => {
    Swal.fire({
      title: "Are you sure you want to empty the cart?",
      showDenyButton: true,
      confirmButtonText: "Yes, empty cart",
      confirmButtonColor: "",
      denyButtonText: `Don't empty cart`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Cart emptied successfully", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cart unchanged", "", "info");
      }
    });
  };

  return (
    <div>
      <h1 className="cartView">Cart view</h1>
      <br />
      {cart.map((elemento) => {
        return (
          <>
            <div className="productInCart" key={elemento.id}>
              <div className="cartText">
                <h5 className="title">{elemento.title}</h5>
              </div>
              <div className="infoProduct">
                <h4>
                  <b style={{ color: "#EC6F66" }}>Materials: </b>
                  {elemento.description}
                </h4>
                <h5>
                  <b style={{ color: "#EC6F66" }}>Quantity: </b>{" "}
                  {elemento.quantity}
                </h5>
              </div>
              <h5>
                <b style={{ color: "#EC6F66" }}>Unit price: </b> $
                {elemento.price}
              </h5>
              <div className="productInCart-content">
                <img src={elemento.img} alt={elemento.title} />
              </div>
              <div className="delete">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteById(elemento.id)}
                >
                  Delete{" "}
                  <img
                    src="https://res.cloudinary.com/dhghrffht/image/upload/v1691034963/icons8-basura-48_cogfly.png"
                    alt="Delete"
                  />
                </button>
              </div>
            </div>
          </>
        );
      })}
      {cart.length > 0 ? (
        <div>
          <button className="btn btn-secondary" onClick={limpiar}>
            Clean cart
          </button>
          <h5>Total price: ${total}</h5>
          <Link to="/checkout">
            <button className="btn btn-primary">Complete the purchase</button>
          </Link>
        </div>
      ) : (
        <div className="cartEmpty">
          <div className="empty">
            <img
              style={{
                width: "6rem",
                height: "6rem",
                marginBottom: "-0.5rem",
              }}
              src="https://res.cloudinary.com/dhghrffht/image/upload/v1690757488/sad-face-drawing-on-white-260nw-590723933_bypwjg-removebg-preview_yu366q.png"
              alt="Sad Face"
            />
            <h1
              style={{
                marginTop: "0.7rem",
                fontWeight: "600",
              }}
            >
              Oh no, your cart is empty!
            </h1>
          </div>
          <div className="alert">
            <h3 style={{ color: "#d7362e", fontSize: "2rem" }}>
              Please, take a look at our products and try to add something
            </h3>
            <div className="clickHere">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/"
              >
                <button
                  className="btn btn-primary"
                  style={{
                    fontWeight: "500",
                    fontSize: "1.3rem",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    boxShadow:
                      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                  }}
                >
                  See products
                  <img
                    style={{
                      width: "2rem",
                      height: "2rem",
                      marginTop: "-0.3rem",
                      marginLeft: "0.3rem",
                    }}
                    src="https://res.cloudinary.com/dhghrffht/image/upload/v1690759258/hand-drawn-arrow-clicking-icon-260nw-1365529214_jihvlk-removebg-preview-fotor-20230730202040_cz7kmx.png"
                    alt="click here"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
