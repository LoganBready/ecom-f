import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import CategoriesGrid from "./components/CategoriesGrid";
import LuresGrid from "./components/LuresGrid";
import RodsGrid from "./components/RodsGrid";
import ReelsGrid from "./components/ReelsGrid";
import TackleGrid from "./components/TackleGrid";
import BootsGrid from "./components/BootsGrid";
import ClothingGrid from "./components/ClothingGrid";
import Cart from "./pages/Cart";

toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  });

  return (
    <>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/login"
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              path="/register"
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/dashboard"
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            {/* <Route
              path="/cart"
              render={(props) =>
                isAuthenticated ? (
                  <Cart {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            /> */}
            <Route path="/cart" component={Cart} />
            <Route path="/category" component={CategoriesGrid} />
            <Route path="/lures" component={LuresGrid} />
            <Route path="/rods" component={RodsGrid} />
            <Route path="/reels" component={ReelsGrid} />
            <Route path="/tackle" component={TackleGrid} />
            <Route path="/boots" component={BootsGrid} />
            <Route path="/clothing" component={ClothingGrid} />
            <Route path="/products/:id" component={Products} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
