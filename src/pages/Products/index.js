import { useParams } from "react-router-dom";
import { Page } from "../../components/Page";

export const Products = () => {

  const { idShop } = useParams();

  return (
    <Page>
      <h1>Products page SHOP {idShop}</h1>
    </Page>
  );
}