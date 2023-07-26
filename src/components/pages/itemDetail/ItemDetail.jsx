import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const [product, setProduct] = useState({});

  const { id } = useParams();

  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProduct({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...product, quantity: cantidad };
    addToCart(productCart);
    //Alert:
    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="detail">
      <div className="info">
        <h3 className="title">{product.title}</h3>
        <h4>
          {" "}
          <b>Materials:</b> {product.description}
        </h4>
        <h3>${product.price} USD</h3>
        {(typeof totalQuantity === "undefined" ||
          product.stock > totalQuantity) &&
          product.stock > 0 && (
            <CounterContainer
              stock={product.stock}
              onAdd={onAdd}
              initial={totalQuantity}
            />
          )}
        {typeof totalQuantity !== "undefined" &&
          totalQuantity === product.stock && (
            <div>
              <h5 className="stockReached">
                Maximum quantity reached in the cart.
              </h5>
            </div>
          )}
      </div>
      <div className="imgDiv">
        <img className="imgProduct" src={product.img} alt={product.title} />
      </div>

      {product.stock === 0 && <h5>No stock.</h5>}

      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
