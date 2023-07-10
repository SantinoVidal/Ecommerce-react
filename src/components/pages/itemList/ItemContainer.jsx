import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../../productsMock";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  const { categoryName } = useParams();
  console.log("category: ", categoryName);

  useEffect(() => {
    let productsFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName === undefined ? products : productsFiltrados);
      //reject({ message: "No autorizado", status: 401 });
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, [categoryName]);

  return <Item items={items} />;
};

export default ItemContainer;
