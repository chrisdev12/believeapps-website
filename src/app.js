import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Index from "./pages/index"
import Banner from "./pages/banner";



const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Index path='/*' />
        <Banner path='/banner'/>
      </Router>
    </React.StrictMode>
  )
}

render(<App/>, document.getElementById('app'));