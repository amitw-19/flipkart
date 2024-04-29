import { styled, Box } from "@mui/material";

const Component = styled(Box)`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled("button")({
  border: "1px solid gray",
  width: "25px",
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: "16px",
  "&:hover": {
    background: "#ccc",
    opacity: 0.5,
    border: "1px solid black",
  },
});

const Item = styled(Box)`
  border: 1px solid gray;
  padding: 2px 8px;
`;

const GroupedButton = ({ cartId, quantity, setQuantity }) => {
  const setItems = (e) => {
    if (e.target.name === "plus") {
      setQuantity(quantity + 1);
    } else if (e.target.name === "minus") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <Component>
      <StyledButton id={cartId} name="minus" onClick={setItems}>
        -
      </StyledButton>
      <Item>{quantity}</Item>
      <StyledButton id={cartId} name="plus" onClick={setItems}>
        +
      </StyledButton>
    </Component>
  );
};

export default GroupedButton;
