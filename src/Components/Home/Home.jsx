import {
  BigCup,
  Button,
  Div,
  H1,
  H2,
  HoverCup,
  ImgCup,
  ImgElipse,
  Main,
  P,
  Span,
  TitleStyle,
} from "./style.js";

import { useState } from "react";

const Home = () => {
  const [image, setImage] = useState(1);

  return (
    <>
      <Main>
        <TitleStyle className="Title">
          <H2>Mais que Café</H2>
          <H1>
            Isso é <Span className="starbucks">Starbucks</Span>
          </H1>

          <P>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </P>

          <Button>SAIBA MAIS</Button>
        </TitleStyle>

        <BigCup className="BigCup">
          <ImgCup src={`copo_grande_${image}.png`} alt="" />
          <ImgElipse src={`elipse_${image}.png`} alt="" />
        </BigCup>
      </Main>

      <footer>
        <Div>
          <HoverCup
            src="copo_pequeno_amarelo.png"
            alt=""
            id="1"
            onClick={() => {
              setImage(1);
            }}
          />
          <HoverCup
            src="copo_pequeno_vermelho.png"
            alt=""
            id="2"
            onClick={() => {
              setImage(2);
            }}
          />
          <HoverCup
            src="copo_pequeno_laranja.png"
            alt=""
            id="3"
            onClick={() => {
              setImage(3);
            }}
          />
        </Div>
      </footer>
    </>
  );
};
export default Home;
