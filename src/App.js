import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <header>
      <nav>
        <MainHeader />
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </nav>
    </header>
  );
}

export default App;
