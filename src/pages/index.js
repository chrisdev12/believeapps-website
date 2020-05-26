import React, { useState, useEffect } from "react";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Nav from "../components/navbar";
import Main from "../components/main";
import Cards from "../components/card";
import Test from "../components/test";
import Header from "../components/header";

const gradientSpace = 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)';
const gradientSpaceToSky = 'linear-gradient(to bottom, #2c5364, #28637e, #227399, #1c82b5, #1c92d2)';
const gradientSky = 'linear-gradient(to bottom, #1c92d2, #f2fcfe)';
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
class Index extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer offset={0} speed={1} factor={3} style={{ background: gradientSpace }} />
        <ParallaxLayer offset={1.9} speed={1} factor={2} style={{ background: gradientSpaceToSky }} />
        {/* <ParallaxLayer offset={2.4} speed={1} factor={1} style={{ background: gradientSky }} /> */}
        <ParallaxLayer offset={0} speed={1} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
        <ParallaxLayer offset={1.9} speed={1} factor={2} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
        <ParallaxLayer offset={0.7} speed={-0.1} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>
        <Header/>

        <Main />
        <ParallaxLayer offset={0.7} speed={-0.1} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        {/* <Cards/> */}

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={5}
          onClick={() => this.parallax.scrollTo(2)}
        />
        
  

        {/* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer> */}
        
        <Cards/>
        
        <ParallaxLayer offset={2.7} speed={0.8} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '35%' }} />
        </ParallaxLayer>
      </Parallax>
    )
  }
}

export default Index;
