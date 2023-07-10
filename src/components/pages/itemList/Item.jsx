import ProductCard from "../../common/productCard/ProductCard";

const Item = ({ items }) => {
  return (
    <div
      className="container"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "3rem",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Item;
