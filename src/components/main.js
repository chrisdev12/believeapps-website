import React from "react";
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import '../styles/main.scss';
class Main extends React.Component {
  render() {
    return (
      <main>
        <ParallaxLayer offset={0.9} speed={1} factor={3} className="main-aboutUs">    
          <h2>SOMOS BELIEVE</h2>
          <div>
            <p> 1 / CREAMOS EXPERIENCIA  </p>
            <p> 2 / ENFOCADOS EN PERFORMANCE </p>
            <p> 3 / CALIDAD DE SOFTWARE  </p>
            <p> 4 / DESARROLLO AGÍL  </p>
          </div>   
        </ParallaxLayer> 
      </main>
    );
  }
}

export default Main;