import { useState } from "react";
import Counter from "./Counter";
import { ToastContainer, toast } from "react-toastify";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : toast.error("No more stock!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    <ToastContainer />;
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default CounterContainer;
