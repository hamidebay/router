
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Form from "./components/Form.js";
import List from "./components/List.js";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
export default function App() {
  return (
 <BrowserRouter>
    <div id = "nav-bar">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route  path="/form"><Form /></Route>
        <Route  path="/list"><List /></Route>                                                                                           
      </Switch>
    </div>
    </BrowserRouter>
  );
}


