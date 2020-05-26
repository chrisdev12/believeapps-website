import React from 'react';
import Transitions from '../animations/transition';
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import '../styles/header.scss';

class Header extends React.Component {
  render() {
    return (  
      <header>
        <ParallaxLayer offset={-0.2} speed={0} factor={1} className="header-title">
          <Transitions props={['BelieveApps']} title={true}/> 
          <Transitions props={['Believe in the future']} title={false} />
        </ParallaxLayer>/
      </header>
    );
  }
}

export default Header;