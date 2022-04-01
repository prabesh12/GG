import React from "react";
import styled from "styled-components";
const Card = (props) => {
  return (
    <>
      <Container className="col-md-4">
      <Image src={props.image} alt="image" />
        <Title>{props.title}</Title>
        <Description>{props.detail}</Description>
      </Container>
    </>
  );
};
const Description = styled.p`
font-family: 'Josefin Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
text-align: center;
letter-spacing: 0.2px;
color: #4F5152;
`
const Container = styled.div`
  height:max-content;
  text-align: center;
  padding: 0.8em; 
`;
const Title = styled.h3`
font-family: 'Caecilia LT Pro';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 32px;
text-align: center;
letter-spacing: 0.2px;
color: #245448;

`
const Image = styled.img`
  height: auto;
  max-width: 100%;
`;

export default Card;
