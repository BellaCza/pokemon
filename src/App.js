import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./pages/store/store";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const type = window.location.pathname.slice(1);

  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Router>
        <Header
          searchField={
            <input
              className="search-bar"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          }
        />
        <Switch>
          <Route path="/:type" children={<Store search={search} />} />
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );

}

export default App;
