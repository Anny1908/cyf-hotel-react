import moment from "moment";
import React from "react";

//var a = moment([2007, 0, 29]);
//var b = moment([2007, 0, 28]);
//a.diff(b, 'days') // 1

const SearchTable2 = props => {
  console.log("cliente", props.cliente);
  let checkIn = moment(props.cliente.checkInDate);
  let checkOut = moment(props.cliente.checkOutDate);

  return (
    <tbody>
      <tr>
        <th scope="row">{props.cliente.id}</th>
        <td>{props.cliente.title}</td>
        <td>{props.cliente.firstName}</td>
        <td>{props.cliente.surname}</td>
        <td>{props.cliente.email}</td>
        <td>{props.cliente.roomId}</td>
        <td>{props.cliente.checkInDate}</td>
        <td>{props.cliente.checkOutDate}</td>
        <td>{checkOut.diff(checkIn, "days")}</td>
      </tr>
    </tbody>
  );
};
export default SearchTable2;
