import { TopbarWrapper, CartWrapper, LogoWrapper } from "./styles";
import { IoCart } from "react-icons/io5";

export const Topbar = () => (
  <TopbarWrapper>
    <LogoWrapper>
      <img width="50px" src="logoapp.png" alt="logo" />
    </LogoWrapper>
    <CartWrapper>
      <div>
        <IoCart />
      </div>
    </CartWrapper>
  </TopbarWrapper>
);