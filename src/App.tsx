import React from "react";
import Nav from "./components/Nav/Nav";
import "./App.scss";

function App() {
  return (
    <>
    
      <div className="container">
        
        <Nav />
        <div className="header">
          <div className="main">
            <h1>NIKE AIR MAX 95</h1>
            <h5>€417</h5>
          

          </div>
          <p>
            Taking inspiration from the human body and '90s athletics
            aesthetics, the Air Max 95 mixes unbelievable comfort with
            fast-paced style. The wavy side panels add natural flow to any
            outfit, while visible Nike Air in the heel and forefoot delivers
            performance comfort.
          </p>
          <button>SEE DETAILS</button>
          <img className="cart" src="/img/cart.png" alt="" />
        
        </div>
        
        
        
      </div>
      
    </>
  );
}

export default App;
