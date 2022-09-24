import { CardShopContent, CardShopImage, CardShopWrapper } from "./styles";

export const CardShop = ({ image, name, location, category }) => (
  <CardShopWrapper>
    <CardShopImage>
      <img src={image} alt={name} />
    </CardShopImage>
    <CardShopContent>
      <h4>{name}</h4>
      <p>{location}</p>
      <span>{category}</span>
    </CardShopContent>
  </CardShopWrapper>
);
