import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductList from "../productList/ProductList";
import Details from "../details/Details";
import Cart from "../cart/Cart";
import Default from "../default/Default";
import Layout from "../layout/Layout";
import { Container } from "@material-ui/core";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Container>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route component={Default} />
            </Switch>
          </Container>
        </Layout>
      </Router>
    </>
  );
}

export default App;
