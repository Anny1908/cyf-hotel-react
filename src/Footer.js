import React from "react";

const Footer = props => {
  // console.log(props);
  return (
    <div className="datos-de-hotel">
      <ul className="lista">
        {props.array.map((elemento, index) => {
          //console.log(elemento);
          return <li key={index}>{elemento}</li>;
        })}
      </ul>
    </div>
  );
};
export default Footer;
