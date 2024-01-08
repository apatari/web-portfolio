import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "bootswatch/dist/lux/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button } from "react-bootstrap";
import Body from "./Body";
import './body.css'
import Header from "./Header";


const bgStyle = {
  backgroundImage: "linear-gradient(to bottom right, blue, pink)"
}

function App() {
  return (
    <div className="App ">
      <Header/>
      <Body />
    </div>
  );
}

export default App;
