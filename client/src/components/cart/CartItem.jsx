import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import ButtonGroup from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useEffect, useId, useState } from "react";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 10px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

const CartItem = ({ item, cost, setCost }) => {
  const [quantity, setQuantity] = useState(1);

  const cartId = useId();

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  let itemCost = quantity * item.price.cost;
  let itemMrp = quantity * item.price.mrp;

  let obj = { id: item.id, num: quantity, rateMrp: itemMrp, rate: itemCost };
  useEffect(() => {
    setCost(obj);
  }, [quantity]);

  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="product" style={{ height: 110, width: 110 }} />
        <ButtonGroup
          cartId={cartId}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller: RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="flipkart"
              style={{ width: 50, marginLeft: 10 }}
            />
          </Box>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Box
            component="span"
            style={{ fontWeight: 600, fontSize: 18, marginRight: 15 }}
          >
            ₹{itemCost}
          </Box>
          <Box component="span" style={{ color: "#878787", marginRight: 15 }}>
            ₹<strike>{itemMrp}</strike>
          </Box>
          <Box component="span" style={{ color: "#388E3C", marginRight: 15 }}>
            {item.price.discount}
          </Box>
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};
export default CartItem;
