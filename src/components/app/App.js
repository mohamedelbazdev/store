import { Switch, Route } from "react-router-dom";
import "./App.css";
import ProductList from "../productList/ProductList";
import Details from "../details/Details";
import Cart from "../cart/Cart";
import Default from "../default/Default";
import Layout from "../layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <ProductList />
      </Layout>
    </>
  );
}

export default App;
