import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-top: 2em;
`;

export const LogoStyle = styled.img`
  width: 110px;
  height: 110px;
  text-align: center;
  margin-left: 5em;
`;

export const UlStyle = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 300px;
  list-style: none;
  font-size: 24px;
  margin-right: 5em;

  a {
    text-decoration: none;
    color: #1e3932;
    font-size: 20px;
    transition: ease-in-out;
    transition-duration: 250ms;
  }

  a:hover {
    cursor: pointer;
    color: #008046;
  }
`;

// export const StyleLink = styled(Link)`
//     text-decoration: none;
//     color: #1e3932;
//     font-size: 20px;
//     transition: ease-in-out;
//     transition-duration: 250ms;

//     &:hover{
//        color: palevioletred;
//     }
// `;
