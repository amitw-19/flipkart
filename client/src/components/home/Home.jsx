import React, { useEffect } from "react";

//components
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { Box, styled } from "@mui/material";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(products);
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <Navbar />
        {
          <Component>
            <Banner />
            <MidSlide
              products={products}
              title="Deal of the Day"
              timer={true}
            />
            <MidSection />
            <Slide
              products={products}
              title="Discounts for You"
              timer={false}
            />
            <Slide products={products} title="Suggesting Items" timer={false} />
            <Slide products={products} title="Top Selection" timer={false} />
            <Slide
              products={products}
              title="Recommended Items"
              timer={false}
            />
            <Slide products={products} title="Trending offers" timer={false} />
            <Slide
              products={products}
              title="Season's top picks"
              timer={false}
            />
            <Slide
              products={products}
              title="Top Deals on Accessories"
              timer={false}
            />
          </Component>
        }
      </div>
    </>
  );
};

export default Home;
