import React from 'react';

export default function Card(props) {
  const { image, title, desc } = props.props;
  console.log(title);
  return (  
    <div>
      <img src={image} alt="Imagen que representa el servicio" />
        <h3>{title}</h3>
        <p>
          {desc}
        </p>
    </div>
  );
}