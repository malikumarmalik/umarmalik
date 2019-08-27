import React, { Component } from "react";
// import data from "./data";
// import axios from 'axios';
import Nav from "./Nav";
import data from "./data";
import Header from "./Header"
import Gallery from "./Gallery"
import Footer from "./Footer";




class App extends Component {

  state = {
   
    data:data,
    
  };
 
  render() {
    return (
      <div>
        <Nav data={this.state.data[0].nav} />
        <Header data={this.state.data[0] .header} />
        <Gallery />
        <Footer />
      </div>
    );
  }
}
export default App;
