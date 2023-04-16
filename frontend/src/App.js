import "./App.css";
import {  useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(()=>{
    WebFont.load({
      google: {
        families: ["Roboto","Droid Sans","chilanka"],
      }
    });
    store.dispatch(loadUser());
  },[])
    return (
      <Router>

      <Header/>

      <Routes>
        {isAuthenticated && <UserOptions user={user} />}
        <Route exact path="/" Component={Home} />
        <Route exact path="/product/:id" Component={ProductDetails} />
        <Route exact path="/products" Component={Products} />
        <Route path="/products/:keyword" Component={Products} />
        <Route exact path="/login" Component={LoginSignUp} />
        <Route exact path="/search" Component={Search} />
        <Route exact path="/account" component={Profile} />
      
      </Routes>
      <Footer/>
      </Router>
    );
}

export default App;