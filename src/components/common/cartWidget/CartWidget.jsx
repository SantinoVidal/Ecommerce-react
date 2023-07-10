import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const CartWidget = () => {
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
          <Badge sx={badgeStyle} title="Cart" badgeContent="0">
            <LocalMallIcon style={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Link>
    </>
  );
};

export default CartWidget;
