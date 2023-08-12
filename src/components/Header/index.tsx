import { HeaderContainer } from "./styles";
import { InstagramLogo, FacebookLogo, TwitterLogo } from "phosphor-react";
import logo from "../../assets/HomeFurniture Logo.png"
import { colors } from "../../styles";

const Header = () => {

  return (
    <HeaderContainer>
      <h1>
        <img height={80} src={logo} alt="" />
        Castro Colchões</h1>
      <ul>
        <li>
          <a href="#">
            <InstagramLogo size={32} weight="bold" color={colors.blue700} />
          </a>
        </li>
        <li>
          <a href="#">
            <FacebookLogo size={32} weight="bold" color={colors.blue700}  />
          </a>
        </li>
        <li>
          <a href="#">
            <TwitterLogo size={32} weight="bold" color={colors.blue700} />
          </a>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
