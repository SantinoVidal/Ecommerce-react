import { useState } from "react";
import Counter from "./counter";

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("Without stock");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default CounterContainer;
