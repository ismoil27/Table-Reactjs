import React from "react";

export const TableRow = ({ contact }) => {
  return (
    <tr key={contact.id}>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.address}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
};
