import { animated } from 'react-spring';
import styled from 'styled-components';


const Container = styled(animated.div)`
  position: relative;
  padding: 25px;
  background: white;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height, border-radious;
`

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  will-change: transform, opacity, border-radius;
`

export { Container, Item }