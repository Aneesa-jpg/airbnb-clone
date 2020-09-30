import React from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchPage from "./SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/" component={Home} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
