import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
/*import FakeBookings from "./data/fakeBookings.json";*/

console.log("algo aqui de reserva");

const Bookings = () => {
  const [bookings, setBookings] = useState([]); /*(FakeBookings)*/
  const [load, setLoad] = useState(true);

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
    fetch(`https://cyf-react.glitch.me/delayed`) //no se puede implementar lo que dice la tarea ya que se mpe el cod.
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoad(false);
      });
  }, []);
  console.log("algo aqui nuevo", Bookings);
  return (
    <div className="App-content">
      {bookings ? (
        <div className="container">
          <Search search={search} />
          {!load ? (
            <SearchResults results={bookings} />
          ) : (
            <span>Loading...</span>
          )}
        </div>
      ) : (
        <p>Error HTTP 500</p>
      )}
    </div>
  );
};

export default Bookings;
