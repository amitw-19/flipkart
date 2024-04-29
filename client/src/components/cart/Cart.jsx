import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//components
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { useState } from "react";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  border: "none",
  marginLeft: "auto",
  background: "#fb641b",
  color: "#fff",
  width: "250px",
  height: "51px",
  borderRadius: "2px",
  cursor: "pointer",
  "&:hover": {
    border: "1px solid #eee",
  },
});

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
  },
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const [cost, setCost] = useState([]);
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        {cartItems.length ? (
          <Container marginTop="55px" container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
              <Header>
                <Typography>My Cart ({cartItems.length})</Typography>
              </Header>
              {cartItems.map((item) => (
                <CartItem item={item} setCost={setCost} />
              ))}
              <ButtonWrapper>
                <StyledButton>Place Order</StyledButton>
              </ButtonWrapper>
            </LeftComponent>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <TotalView cartItems={cartItems} cost={cost} />
            </Grid>
          </Container>
        ) : (
          <EmptyCart />
        )}
      </ThemeProvider>
    </>
  );
};

export default Cart;
