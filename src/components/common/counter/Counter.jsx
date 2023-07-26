const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <>
      <div>
        <h3 className="stock">Stock available!</h3>
      </div>
      <div className="counter">
        <button className="btn" onClick={restar}>
          {" "}
          -
        </button>
        <h1>{contador}</h1>
        <button className="btn btn1" onClick={sumar}>
          {" "}
          +
        </button>
        <button className="btn btn1 addToCart" onClick={() => onAdd(contador)}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Counter;
