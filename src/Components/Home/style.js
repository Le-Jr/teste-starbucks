import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
`;

export const TitleStyle = styled.section`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 60vh;
  width: 800px;
  margin-left: 5em;
  margin-top: 6em;
  /* border: solid 1px black; */
`;

export const H1 = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
  font-weight: 400;
`;

export const Span = styled.span`
  color: #037143;
  font-weight: 700;
  font-size: 96px;
`;

export const H2 = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 64px;
  margin-bottom: 20px;
  font-weight: 400;
`;

export const P = styled.p`
  width: 700px;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 36px;
`;

export const Button = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  background-color: #037143;
  color: #fff;
  border: none;
  border-radius: 40px;
  padding: 15px 60px;
  font-size: 20px;
  cursor: pointer;
`;

export const Div = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 50px;
  /* border: solid 1px black; */

  /* img:hover {
    transform: rotate(12deg);
    cursor: pointer;
  } */
`;

export const HoverCup = styled.img`
  &:hover {
    cursor: pointer;
    transform: rotate(12deg);
  }
`;

export const BigCup = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  /* border: solid 1px black; */
  position: relative;
  z-index: 2;
`;

export const ImgElipse = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-5%);
  z-index: 1;
`;

export const ImgCup = styled.img`
  z-index: 2;
`;
