import React, { Component } from "react";
import "./App.css";
import Header from "./Componets/Header";
import Film from "./Componets/Film";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='container'>
          <div className='main'>
            <Film />
          </div>
        </div>
      </>
    );
  }
}

export default App;
