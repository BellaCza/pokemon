import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Store from "./pages/store/store";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./style/stores/stores.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  useEffect(() => setType(window.location.pathname.slice(1)), []);

  return (
    <div className={`App ${type}`}>
      <Router>
        <Header
          searchField={
            <input
              className="search-bar"
              type="text"
              value={search}
              placeholder = "O que você procura?"
              onChange={(event) => setSearch(event.target.value)}
            />
          }
          onChangeType={setType}
        />
        <Switch>
          <Route path="/:type" children={<Store search={search} />} />
          <Route path="/" exact>
            < Home search={search} />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );

}

export default App;
