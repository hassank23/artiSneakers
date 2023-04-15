import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import WebFont from "webfontloader";
import Header from "./component/layout/Header/Header.js"
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home";
//import Loader from './component/layout/Loader/Loader';
import ProductDetails  from './component/Product/ProductDetails.js';
import Products from "./component/Product/Products"
import Search from './component/Product/Search';
import  LoginSignUp  from './component/User/LoginSignUp.js';
function App() {
  React.useEffect(()=>{
    WebFont.load({
      google: {
        families: ["Roboto","Droid Sans","chilanka"],
      }
    });
  })
    return (
      <Router>
      <Header/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/product/:id" Component={ProductDetails} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/login" Component={LoginSignUp} />
        <Route exact path="/search" Component={Search} />
      </Routes>
      <Footer/>
      </Router>
    );
}

export default App;