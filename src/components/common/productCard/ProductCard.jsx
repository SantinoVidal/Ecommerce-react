import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div key={item.id} style={{ marginBottom: "3rem" }}>
      <Card
        sx={{
          height: 440,
          width: 240,
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          borderRadius: "3px",
          background: "linear-gradient(to right, #F3A183, #EC6F66)",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={item.img}
            alt="product image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: "1.1rem",
                color: "white",
                fontWeight: "500",
                fontFamily: "Inter",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "0.8rem",
                color: "#111111",
                marginBottom: "0.4rem",
                fontWeight: "500",
                fontFamily: "Inter",
              }}
            >
              Materials: {item.description}
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                fontSize: "1.4rem",
                color: "white",
                fontWeight: "400",
                fontFamily: "Inter",
              }}
            >
              ${item.price} USD
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/itemDetail/${item.id}`}>
            <Button
              size="small"
              color="primary"
              sx={{ marginTop: "-0.7rem", color: "white", fontFamily: "Inter" }}
            >
              <p>See more »</p>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
