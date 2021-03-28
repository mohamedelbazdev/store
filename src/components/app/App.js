import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductList from "../productList/ProductList";
import Details from "../details/Details";
import Cart from "../cart/Cart";
import Default from "../default/Default";
import Layout from "../layout/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
