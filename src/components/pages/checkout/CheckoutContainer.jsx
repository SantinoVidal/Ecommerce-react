import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, getTotalPrice } = useContext(CartContext);

  const [data, setData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  let total = getTotalPrice();

  const enviarForm = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    //Creo la orden en Firebase:
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    //Modifico el stock de cada documento, en Firebase:
    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
  };

  const capturarInfo = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      {orderId ? (
        <div className="compraExitosa">
          <h1>
            The purchase has been made successfully{" "}
            <img
              src="https://res.cloudinary.com/dhghrffht/image/upload/v1691109911/icons8-de-acuerdo-48_h3zptw.png"
              alt="success"
            />
          </h1>
          <h2>Thank you for your purchase!</h2>
          <h4 className="orderID">
            Your purchase ID is:{" "}
            <b style={{ letterSpacing: "0.15rem" }}>{orderId}</b>
          </h4>
          <div className="return">
            <Link to="/">
              <button className="btn btn-primary3">
                Return home{" "}
                <img
                  src="https://res.cloudinary.com/dhghrffht/image/upload/v1691110363/icons8-volver-64_t3jdsd.png"
                  alt="return"
                />
              </button>
            </Link>
          </div>
          <p>- Be majestic -</p>
        </div>
      ) : (
        <div>
          <h1
            style={{
              backgroundColor: "#ededed",
              color: "#111111",
              fontFamily: "Jost, sans-serif",
              fontWeight: "600",
              textAlign: "center",
              padding: "0.5rem",
            }}
          >
            Check Out{" "}
          </h1>
          <form
            onSubmit={enviarForm}
            style={{
              marginLeft: "16rem",
              marginRight: "16rem",
              marginTop: "2rem",
              marginBottom: "2rem",
              padding: "2rem",
              paddingLeft: "10rem",
              paddingRight: "10rem",
            }}
          >
            <h4
              style={{
                color: "#111111",
                fontWeight: "600",
              }}
            >
              Please, complete the check out to finalize your purchase.
            </h4>
            <input
              style={{
                borderRadius: "3px",
                padding: "0.5rem",
              }}
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={capturarInfo}
            />
            <input
              style={{
                borderRadius: "3px",
                padding: "0.5rem",
              }}
              type="text"
              placeholder="Enter your surname"
              name="surname"
              onChange={capturarInfo}
            />
            <input
              style={{
                borderRadius: "3px",
                padding: "0.5rem",
              }}
              type="phone"
              placeholder="Enter your phone number"
              name="phone"
              onChange={capturarInfo}
            />
            <input
              style={{
                borderRadius: "3px",
                padding: "0.5rem",
              }}
              type="email"
              placeholder="Enter your e-mail address"
              name="email"
              onChange={capturarInfo}
            />
            <button className="btn btn-primary2" type="submit">
              Confirm purchase{" "}
              <img
                src="https://res.cloudinary.com/dhghrffht/image/upload/v1691109053/icons8-shopaholic-50_lml16i.png"
                alt="bag"
              />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutContainer;
