import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Locate from "./pages/Locate";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/locate" exact component={Locate} />
      </Switch>
    </Router>
  );
}

export default App;
