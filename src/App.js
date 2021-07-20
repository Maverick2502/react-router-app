import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  /**
   * React Router goes 'top-to-bottom'.
   * It matches the start of the path. Not the entire path.
   * Two solutions: changing the order or adding 'exact'
   */

  return (
    <header>
      <nav>
        <MainHeader />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </nav>
    </header>
  );
}

export default App;
