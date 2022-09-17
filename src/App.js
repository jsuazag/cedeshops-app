import { GlobalStyle } from "./globalStyles";
import { BrowserRouter } from 'react-router-dom';
import { Topbar } from "./components/Topbar";
import { Menu } from "./components/Menu";
import { Navigation } from "./pages/Navigation";

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Topbar />
    <Navigation />
    <Menu />
  </BrowserRouter>
)