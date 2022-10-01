import { useParams } from "react-router-dom";
import { Page } from "../../components/Page";
import { Product } from "../../components/Product";
import { Search } from "../../components/Search";
import { ProductGrid } from "./styles";

const PRODUCTS = [
  {
    id: 1,
    name: "Leche colanta x1",
    price: 5000,
    image: "https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNENFZHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--33dcd2c3df9ad3b88515f1dcccd6ad4b6aa5fa82/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/Leche-uht-entera-1100ml-colanta-1.png"
  },
  {
    id: 2,
    name: "Huvos x 30",
    price: 20000,
    image: "https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVlDYlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f38ad4b51d6264d7807ba4e407614cb4b8ddded2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/HUEVO%20AA.jpg"
  },
  {
    id: 3,
    name: "Quesito colanta",
    price: 9000,
    image: "https://elviejoparisvirtual.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWhES2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3f484b60a4bf94715b02b7b9d4a9c5bca6fe992c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9TY21WemFYcGxYM1J2WDJacGRGc0hhUUpZQW1rQ1dBST0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--361554d0b7dd92546ceda39454543fcece989fd5/7702129014021.jpg"
  },
  {
    id: 2,
    name: "Huvos x 30",
    price: 20000,
    image: "https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVlDYlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f38ad4b51d6264d7807ba4e407614cb4b8ddded2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/HUEVO%20AA.jpg"
  },
  {
    id: 3,
    name: "Quesito colanta",
    price: 9000,
    image: "https://elviejoparisvirtual.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWhES2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3f484b60a4bf94715b02b7b9d4a9c5bca6fe992c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9TY21WemFYcGxYM1J2WDJacGRGc0hhUUpZQW1rQ1dBST0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--361554d0b7dd92546ceda39454543fcece989fd5/7702129014021.jpg"
  },
  {
    id: 2,
    name: "Huvos x 30",
    price: 20000,
    image: "https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVlDYlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f38ad4b51d6264d7807ba4e407614cb4b8ddded2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/HUEVO%20AA.jpg"
  },
  {
    id: 3,
    name: "Quesito colanta",
    price: 9000,
    image: "https://elviejoparisvirtual.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWhES2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3f484b60a4bf94715b02b7b9d4a9c5bca6fe992c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9TY21WemFYcGxYM1J2WDJacGRGc0hhUUpZQW1rQ1dBST0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--361554d0b7dd92546ceda39454543fcece989fd5/7702129014021.jpg"
  },
  {
    id: 2,
    name: "Huvos x 30",
    price: 20000,
    image: "https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVlDYlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f38ad4b51d6264d7807ba4e407614cb4b8ddded2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/HUEVO%20AA.jpg"
  },
  {
    id: 3,
    name: "Quesito colanta",
    price: 9000,
    image: "https://elviejoparisvirtual.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWhES2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3f484b60a4bf94715b02b7b9d4a9c5bca6fe992c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9TY21WemFYcGxYM1J2WDJacGRGc0hhUUpZQW1rQ1dBST0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--361554d0b7dd92546ceda39454543fcece989fd5/7702129014021.jpg"
  },
]

export const Products = () => {

  const { idShop } = useParams();

  return (
    <Page>
      <p>shop ID: {idShop}</p>
      <Search />
      <ProductGrid>
      {
        PRODUCTS.map((item, key) => <Product key={key} {...item} /> )
      }
      </ProductGrid>
    </Page>
  );
}