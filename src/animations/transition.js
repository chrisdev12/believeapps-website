import React, { useState, useEffect } from "react";
import { useTransition, animated } from 'react-spring';

export default function transtions(params) {
  const title = params.title
  const [items, setItems] = useState([]);
  useEffect(() => {
    setTimeout(() =>
      setItems(params.props),
    200);
  }, []);

  const transitions = useTransition(items, item => item, {
    from: { transform: 'translate3d(0,-50px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-50px,0)' },
  })

  if (title) {
    return transitions.map(({ item, props, key }) =>
      <animated.h1 key={key} style={props}>{item}</animated.h1>
    )
  } 

  return transitions.map(({ item, props, key }) =>
    <animated.p key={key} style={props}>{item}</animated.p>
  )
}