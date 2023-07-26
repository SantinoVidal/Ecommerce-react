import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

let array = [1, 2, 3, 4, 5];

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
      {items.length > 0
        ? items.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })
        : array.map((e) => {
            return (
              <>
                <div className="skeleton" key={e}>
                  <Skeleton variant="rounded" width={210} height={230} />
                  <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton
                    variant="text"
                    width={100}
                    sx={{ fontSize: "2rem" }}
                  />
                  <Skeleton variant="rectangular" width={60} height={20} />
                </div>
              </>
            );
          })}
    </div>
  );
};

export default Item;
