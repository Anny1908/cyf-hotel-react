import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

let ciudades = [
  {
    url: "peoplemakeglasgow.com",
    nombre: "Glasgow",
    img:
      "https://i1.wp.com/www.hisour.com/wp-content/uploads/2018/05/Architecture-in-Glasgow.jpg?fit=1024%2C640&ssl=1"
  },
  {
    url: "visitmanchester.com",
    nombre: "Manchester",
    img: "https://img.bekiaviajes.com/articulos/portada/74000/74570-h3.jpg"
  },
  {
    url: "visitlondon.com",
    nombre: "London",
    img:
      "https://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg"
  }
];

let footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards ciudades={ciudades} /> <Bookings />
      <Restaurant />
      <Footer array={footer} />{" "}
    </div>
  );
};

export default App;
