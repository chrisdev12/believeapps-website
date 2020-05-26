import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import Chain from '../animations/Chain';
import appImg from "../images/rotate.svg";
import '../styles/tarjets.scss';
import qualityImg from "../images/settings.svg";
import webImg from "../images/responsive-design.svg";
import dataImg from "../images/layer.svg";

export default function Cards() {
  return ( 
    <section>
      <ParallaxLayer className='service-tarjets' style={{justifyContent:'flex-start'}}  offset={1.2} speed={0} factor={1}>
        <Chain data={{
          width: '10rem',
          height: '10rem',
          background: ['linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', 'white'],
          img: appImg,
          title: 'Apps móviles',
          desc: 'aaaaa'       
        }} />
      </ParallaxLayer> 
      <ParallaxLayer className='service-tarjets' style={{justifyContent:'flex-end'}} offset={1.45} speed={0} factor={1}>
        <Chain data={{
          width: '10rem',
          height: '10rem',
          background: ['linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', 'white'],
          img: qualityImg,
          title: 'Calidad de software',
          desc: 'aaaaa'       
        }} />
      </ParallaxLayer>  
      <ParallaxLayer className='service-tarjets' style={{justifyContent:'flex-start'}} offset={1.7} speed={0} factor={1}>
        <Chain data={{
          width: '10rem',
          height: '10rem',
          background: ['linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 'white'],
          img: dataImg,
          title: 'Análisis de datos',
          desc: 'aaaaa'       
        }} />
      </ParallaxLayer>  
      <ParallaxLayer className='service-tarjets' style={{justifyContent:'flex-end'}} offset={1.95} speed={0} factor={1}>
        <Chain data={{
          width: '10rem',
          height: '10rem',
          background: ['linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', 'white'],
          img: webImg,
          title: 'Desarrollo web',
          desc: 'aaaaa'       
        }} />
      </ParallaxLayer>
    </section>
  );
}