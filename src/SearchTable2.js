import React from "react";

const SearchTable2 = props => {
  console.log("cliente", props.cliente);
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
      </tr>
    </tbody>
  );
};
export default SearchTable2;
