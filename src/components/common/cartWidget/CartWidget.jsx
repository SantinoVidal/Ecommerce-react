import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  const badgeStyle = {
    "& .MuiBadge-badge": {
      color: "white",
      backgroundColor: "#E54F48",
    },
  };

  return (
    <>
      <Link to="/cart">
        {" "}
        <IconButton aria-label="cart">
          <Badge sx={badgeStyle} title="Cart" badgeContent={total} showZero>
            <LocalMallIcon style={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Link>
    </>
  );
};

export default CartWidget;
