import { Box } from "@mui/material";
import Slide from "./Slide";
import styled from "@emotion/styled";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  padding: 5,
  marginTop: 10,
  marginLeft: 10,
  width: "17%",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const theme = createTheme();

function MidSlide({ products, title, timer }) {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <ThemeProvider theme={theme}>
      <Component>
        <LeftComponent>
          <Slide products={products} title={title} timer={timer} />
        </LeftComponent>
        <RightComponent>
          <img src={adURL} alt="ad" style={{ width: 217, height: 355 }} />
        </RightComponent>
      </Component>
    </ThemeProvider>
  );
}

export default MidSlide;
