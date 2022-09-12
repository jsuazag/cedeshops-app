import { GlobalStyle } from "./globalStyles";
import { Home } from "./pages/Home";
import { Topbar } from "./components/Topbar";
import { Menu } from "./components/Menu";

export const App = () => (
  <>
    <GlobalStyle />
    <Topbar />
    <Home />
    <Menu />
  </>
)