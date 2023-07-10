const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div>
      <button className="btn btn-danger" onClick={sumar}>
        {" "}
        +
      </button>
      <h1>{contador}</h1>
      <button className="btn btn-danger" onClick={restar}>
        {" "}
        -
      </button>
      <button className="btn btn-danger" onClick={() => onAdd(contador)}>
        Add to cart
      </button>
    </div>
  );
};

export default Counter;
