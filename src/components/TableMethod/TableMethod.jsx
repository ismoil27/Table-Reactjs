import React, { useState } from "react";
import "./table.css";
import data from "./fake-data.json";
import { TableRow } from "./TableRow";

export const TableMethod = () => {
  const [contact, setContact] = useState(data);
  const [addForm, setaddFrom] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    const formName = e.target.getAttribute("name");
    const formValue = e.target.value;

    const newData = { ...addForm };
    newData[formName] = formValue;

    setaddFrom(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: contact.length + 1,
      name: addForm.name,
      address: addForm.address,
      phone: addForm.phone,
      email: addForm.email,
    };

    const newContacts = [...contact, newContact];
    setContact(newContacts);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((contact) => (
            <TableRow contact={contact} />
          ))}
        </tbody>
      </table>
      <h2>Add your information:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          required
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          id=""
          required
          placeholder="Enter an address"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          id=""
          required
          placeholder="Enter a phone number"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id=""
          required
          placeholder="Enter email"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TableMethod;
