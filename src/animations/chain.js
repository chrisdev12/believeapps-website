import React, { useState } from 'react'
import {useSpring, animated, useTransition, useChain, config } from 'react-spring'

export default function Viewpager(args) {
  const { data } = args;
  const [open, setOpen] = useState(false)
  const [props, set, stop] = useSpring(() => (
    {
      config: config.stiff,
      borderRadius: '50%',
      width: data.width,
      height: data.height,
      background: data.background[0]
    })
  );

  set(
    {
      borderRadius: open ? '5px' : '50%',
      width: open ? '90%' : data.width,
      background: open ? 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' : data.background[0]
    }
  )

  // useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])
  
  return (
    <animated.div className='card' style={props} onClick={() => setOpen(open => !open)}>
      {
        open ? (
                  <>
                    <img src={data.img} alt="Imagen que representa el servicio" />
                    <h3>{data.title}</h3>
                    <p>
                      {data.desc}
                    </p>
                  </>
                )
              : data.title
      }
    </animated.div>
  )
}