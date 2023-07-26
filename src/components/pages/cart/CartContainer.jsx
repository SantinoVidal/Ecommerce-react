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
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h5>{elemento.title}</h5>
            <img src={elemento.img} alt={elemento.title} />
            <h5>${elemento.price}</h5>
            <h5>Quantity: {elemento.quantity}</h5>
            <button
              className="btn btn-danger"
              onClick={() => deleteById(elemento.id)}
            >
              Delete
            </button>
          </div>
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
          <h1>Your cart is empty</h1>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
