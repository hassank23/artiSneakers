import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from "./component/layout/Header/Header.js"
import WebFont from "webfontloader";
import React from 'react';
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
      </Router>
    );
}

export default App;