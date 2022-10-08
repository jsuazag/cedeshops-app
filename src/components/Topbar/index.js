import { TopbarWrapper, CartWrapper, LogoWrapper } from "./styles";
import { IoCart } from "react-icons/io5";
import { useCart } from "../../contexts/CartContext";

export const Topbar = () => {

  const {cart} = useCart();

  return (
    <TopbarWrapper>
      <LogoWrapper>
        <img src="/logoapp.png" alt="logo" />
      </LogoWrapper>
      <CartWrapper>
        <div>
          <IoCart />
        </div>
        <div>{cart.quantity}</div>
      </CartWrapper>
    </TopbarWrapper>
  );
};
