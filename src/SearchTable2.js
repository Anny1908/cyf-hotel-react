import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

//var a = moment([2007, 0, 29]);
//var b = moment([2007, 0, 28]);
//a.diff(b, 'days') // 1

const SearchTable2 = props => {
  /*console.log("cliente", props.cliente);*/
  let checkIn = moment(props.cliente.checkInDate);
  let checkOut = moment(props.cliente.checkOutDate);

  const [select, setSelect] = useState("false");
  const [id, setId] = useState("");

  const changeColor = () => {
    setSelect(!select);
  };

  const handleClick = event => {
    event.preventDefault();
    console.log("button click");
    setId(props.cliente.id);
    console.log(id);
  };
  return (
    <>
      <tbody>
        <tr onClick={changeColor} className={select ? null : "purple"}>
          <th scope="row">{props.cliente.id}</th>
          <td>{props.cliente.title}</td>
          <td>{props.cliente.firstName}</td>
          <td>{props.cliente.surname}</td>
          <td>{props.cliente.email}</td>
          <td>{props.cliente.roomId}</td>
          <td>{props.cliente.checkInDate}</td>
          <td>{props.cliente.checkOutDate}</td>
          <td>{checkOut.diff(checkIn, "days")}</td>
          <td>
            <button onClick={handleClick}>Show profile</button>
          </td>
        </tr>
      </tbody>
      <span>
        <CustomerProfile id={id} />
      </span>
    </>
  );
};
export default SearchTable2;
