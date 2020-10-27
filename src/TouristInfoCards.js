import React from "react";

const TouristInfoCards = props => {
  console.log(props);
  return (
    <div className="tarjetas">
      {props.ciudades.map((ciudad, index) => {
        return (
          <div key={index} className="card">
            <img src={ciudad.img} className="card-img-top" />
            <div className="card-body">
              <a href={"https://" + ciudad.url} className="btn btn-primary">
                Go to{ciudad.nombre}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
