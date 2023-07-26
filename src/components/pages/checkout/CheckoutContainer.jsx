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
      <h1>Check Out</h1>

      {orderId ? (
        <div>
          <h1>Gracias por su compra!</h1>
          <h3 className="orderID">
            El ID de su compra es: <b>{orderId}</b>
          </h3>
          <Link to="/">
            <button className="btn btn-primary">Return home</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={enviarForm}>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={capturarInfo}
          />
          <input
            type="text"
            placeholder="Enter your surname"
            name="surname"
            onChange={capturarInfo}
          />
          <input
            type="phone"
            placeholder="Enter your phone"
            name="phone"
            onChange={capturarInfo}
          />
          <input
            type="email"
            placeholder="Enter your e-mail"
            name="email"
            onChange={capturarInfo}
          />
          <button className="btn btn-primary" type="submit">
            Purchase
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutContainer;
