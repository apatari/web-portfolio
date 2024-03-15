import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "bootswatch/dist/lux/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Body from "./Body";
import './body.css'
import Header from "./Header";
import Footer from "./Footer";


const bgStyle = {
  backgroundImage: "linear-gradient(to bottom right, blue, pink)"
}

function App() {
  return (
    <div className="App ">
      <Header/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
