import React from "react";
import styled, { css } from "styled-components";

const StyleCard = styled.div`
  height: 400px;
  /* width: 400px; */
  position: relative;
`;

const CardImage = styled.div`
  height: 400px;
  /* width: 400px; */
  border-radius: 8px;
`;
const CarImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CarContent = styled.div`
  /* width: 340px; */
  left: 50%;
  height: 120px;
  border-radius: 10px;
  width: calc(100% - 36px);
  background-color: white;
  justify-content: space-between;
  position: absolute;
  transform: translate(-50%, -50%);
  /* margin-left: 30px; */
`;

const CarContentTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const CarImgAuthor = styled.img`
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  flex-shrink: 0;
  margin: 10px 0 0 10px;
`;
const CarUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 12px;
`;
const CarUserName = styled.span`
  color: #333;
  font-size: 16px;
  font-weight: 300px;
`;
const CarAnimation = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding-right: 20px;
`;
// ================================
const CarContentBottom = styled.div`
  width: 100%;
  padding-left: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const CarContentBottomSpan = styled.span`
  right: 0;
  font-weight: bold;
  font-style: 18px;
  padding-right: 20px;
  color: transparent;
  display: inline-block;
  background-image: linear-gradient(
    to right bottom,
    rgba(206, 114, 107, 0.986),
    rgb(79, 124, 221)
  );
  -webkit-background-clip: text;
  background-clip: text;
  ${(props) =>
    props.color &&
    css`
      background-image: linear-gradient(
        86.88deg, #20e3b2, #2cccff
      );
    `};
`;
const CarContentBottomH3 = styled.h3`
  margin: 0;
  padding-top: 25px;
  font-weight: 500px;
`;

const Card = (props) => {
//   console.log("🚀 ~ file: Card.js:107 ~ Card ~ props:", props)
  return (
    <StyleCard>
      <CardImage>
        <CarImg
          src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?compress=1&resize=1024x768"
          alt=""
        />
      </CardImage>
      <CarContent>
        <CarContentTop>
          <CarUser>
            <div>
              <CarImgAuthor
                src="https://images.unsplash.com/photo-1670272499188-79fe22656f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <CarUserName>@Author</CarUserName>
          </CarUser>
          <CarAnimation>256</CarAnimation>
        </CarContentTop>
        <CarContentBottom>
          <CarContentBottomH3>Cosmic Perspective</CarContentBottomH3>
          <CarContentBottomSpan color={props.color}>12000 PSL</CarContentBottomSpan>
        </CarContentBottom>
      </CarContent>
    </StyleCard>
  );
};

export default Card;
