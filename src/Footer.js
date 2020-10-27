import React from "react";

const Footer = props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.array.map((elemento, index) => {
          console.log(elemento);
          return <li key={index}>{elemento}</li>;
        })}
      </ul>
    </div>
  );
};
export default Footer;
