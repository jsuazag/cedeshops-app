import { IoHome, IoCart, IoPerson } from "react-icons/io5";
import { MenuWrapper } from "./styles";

const MenuOptions = [
  {
    icon: IoHome,
    label: "Inicio",
    path: "/"
  },
  {
    icon: IoCart,
    label: "Carrito",
    path: "/"
  },
  {
    icon: IoPerson,
    label: "Usuario",
    path: "/"
  },
];

export const Menu = () => {
  return (
    <MenuWrapper>
      { 
        MenuOptions.map((item, i) => (<div key={i}>{item.label}</div>))
      }
    </MenuWrapper>
  )
};
