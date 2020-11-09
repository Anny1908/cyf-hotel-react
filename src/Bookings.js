import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
/*import FakeBookings from "./data/fakeBookings.json";*/

console.log("algo aqui de reserva");

const Bookings = () => {
  const [bookings, setBookings] = useState([]); /*(FakeBookings)*/

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    console.log("nuevo", bookings);
    const filterInformation = bookings.filter(
      elemento =>
        elemento.firstName === searchVal || elemento.surname === searchVal
    );
    setBookings(filterInformation);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);
  console.log("algo aqui nuevo", Bookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
