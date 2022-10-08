import { GlobalStyle } from "./globalStyles";
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from "./pages/Navigation";
import { CartContextStore } from "./contexts/CartContext";

export const App = () => (
  <BrowserRouter>
    <CartContextStore>
      <GlobalStyle />
      <Navigation />
    </CartContextStore>
  </BrowserRouter>
)