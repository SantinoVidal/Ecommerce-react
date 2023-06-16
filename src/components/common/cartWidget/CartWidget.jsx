import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

const CartWidget = () => {
  return (
    <>
      <IconButton aria-label="cart">
        <Badge badgeContent={0} color="secondary" showZero>
          <LocalMallIcon color="action" />
        </Badge>
      </IconButton>
    </>
  );
};

export default CartWidget;
