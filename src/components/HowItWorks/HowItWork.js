import React from "react";
import styled from "styled-components";
import List from "./List";
import Card from "./Card";

const HowItWork = () => {
  return (
    <>
      <div className="how_it_works container">
        <div className="row">
          <Wrapper>
            <Heading>How it Works</Heading>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. commodi,
              voluptatem nemo cupiditate facilis
            </Description>
          </Wrapper>
          <div className="container">
          <ItemContainer className="row">
            {List.map((product) => {
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
          <div></div>
        </div>
      </div>
    </>
  );
};
const ItemContainer = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  color: #4f5152;
  overflow-x: hidden;
`;

export default HowItWork;
