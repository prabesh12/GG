import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import Card from "./Card";

const Product = () => {
  return (
    <>
      <div className="product_wrap container" >
        <div className="row">
          <Wrapper>
            <Heading>Our Products</Heading>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. commodi,
              voluptatem nemo cupiditate facilis
            </Description>
          </Wrapper>
         
          <ItemContainer className="row row-cols-sm-2">
            {ProductList.map((product) => {
                
              return (
                <Card
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  detail={product.detail}
                />
              );
            })}
            </ItemContainer>
          </div>
        </div>
      
    </>
  );
};
const ItemContainer = styled.div``;

const product_wrap = styled.div`
padding: 40px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
`;

const Heading = styled.h4`
  font-style: normal;
  font-weight: 850;
  font-size: 40px;
  line-height: 44px;
  align-items: center;
  text-align: center;
  letter-spacing: 1.33304px;
  color: #245448;
`;

const Description = styled.pre`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #4f5152;
  overflow-x: hidden;
`;

export default Product;
