import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/Search/SearchPage";
import DetailsPage from "./components/Details/DetailsPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Details/:id/">
          <DetailsPage />
        </Route>
        <Route path="/">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}
