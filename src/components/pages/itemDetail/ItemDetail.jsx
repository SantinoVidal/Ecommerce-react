import { useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProduct(res));
  }, [id]);

  const onAdd = (cantidad) => {
    console.log(product);
    console.log(cantidad);
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <h4>Materials: {product.description}</h4>
      <h3>${product.price} USD</h3>
      <img src={product.img} alt={product.title} />

      <CounterContainer stock={product.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
