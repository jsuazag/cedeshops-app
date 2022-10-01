import { currencyFormat } from "../../utils/CurrencyFormat";
import { ProductWrapper } from "./styles";

export const Product = ({ id, name, price, image }) => (
  <ProductWrapper>
    <img src={image} alt={name} width="50px" />
    <p>{name}</p>
    <h6>{currencyFormat(price)}</h6>
  </ProductWrapper>
);
