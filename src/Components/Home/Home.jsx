import { useState } from "react";
import "./style.scss";

const Home = () => {
  const [image, setImage] = useState(1);

  return (
    <>
      <main>
        <section className="Title">
          <h2>Mais que Café</h2>
          <h1>
            Isso é <span className="starbucks">Starbucks</span>
          </h1>

          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>

          <button>SAIBA MAIS</button>
        </section>

        <section className="section">
          <img src={`copo_grande_${image}.png`} alt="" className="Cup" />
          <img src={`elipse_${image}.png`} alt="" />
        </section>
      </main>

      <footer>
        <div>
          <img
            className="HoverCup"
            src="copo_pequeno_amarelo.png"
            alt=""
            id="1"
            onClick={() => {
              setImage(1);
            }}
          />
          <img
            className="HoverCup"
            src="copo_pequeno_vermelho.png"
            alt=""
            id="2"
            onClick={() => {
              setImage(2);
            }}
          />
          <img
            className="HoverCup"
            src="copo_pequeno_laranja.png"
            alt=""
            id="3"
            onClick={() => {
              setImage(3);
            }}
          />
        </div>
      </footer>
    </>
  );
};
export default Home;
