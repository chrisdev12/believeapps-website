import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Nav from "./components/navbar";
import Index from "./pages/index"
import Test from "./pages/test"


const App = () => {

  return (
    <React.StrictMode>
       <Nav/>
      <Router>
        <Index path='/*' />
        <Test path='/test/:id'/>
      </Router>
    </React.StrictMode>
  )
}

render(<App/>, document.getElementById('app'));