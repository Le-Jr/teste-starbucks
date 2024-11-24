import { Link } from "react-router-dom";
import { HeaderStyle, LogoStyle, UlStyle } from "./style";

const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle src="/logo.png" alt="" />
      <nav>
        <UlStyle>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/novidades">Novidades</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </UlStyle>
      </nav>
    </HeaderStyle>
  );
};
export default Header;
