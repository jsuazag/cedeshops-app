import { Page } from "../../components/Page";
import { Search } from "../../components/Search";
import { CardShop } from "./components/CardShop";

const SHOPS = [
  {
    id: 1,
    name: "D1",
    image: "https://static.wikia.nocookie.net/logopedia/images/a/a8/Tiendas_D1_logo.png",
    location: "Tienda d1 en Medellín",
    category: "Supermercado"
  },
  {
    id: 2,
    name: "Makro",
    image: "https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/MAKRO-01-1024x648.jpg",
    location: "Tienda Makro en Medellín",
    category: "Supermercado"
  },
  {
    id: 3,
    name: "La tienda del peluquero",
    image: "https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg",
    location: "Tienda del Peluquero en Medellín",
    category: "Belleza"
  },
  {
    id: 4,
    name: "La tienda del peluquero",
    image: "https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg",
    location: "Tienda del Peluquero en Medellín",
    category: "Belleza"
  },
  {
    id: 5,
    name: "La tienda del peluquero",
    image: "https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg",
    location: "Tienda del Peluquero en Medellín",
    category: "Belleza"
  }
];

export const Home = () => (
  <Page>
    <Search />
    {
      SHOPS.map((item, key) => <CardShop key={key} {...item} />  )
    }
  </Page>
);
