import { GlobalStyle } from "./globalStyles";
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from "./pages/Navigation";

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Navigation />
  </BrowserRouter>
)