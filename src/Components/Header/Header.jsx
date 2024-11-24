import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <img src="/logo.png" alt="" className="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/novidades">Novidades</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
