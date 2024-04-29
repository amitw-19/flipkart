import { Grid } from "@mui/material";
import { imageURL } from "../../constants/data";
import styled from "@emotion/styled";

const Wrapper = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`;

const MidSection = () => {
  return (
    <Wrapper lg={12} sm={12} xs={12} container>
      {imageURL.map((image) => (
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <img src={image} alt="ads" style={{ width: "100%" }} />
        </Grid>
      ))}
    </Wrapper>
  );
};

export default MidSection;
