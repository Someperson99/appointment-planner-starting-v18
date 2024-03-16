import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
          <h3>Name</h3>
          <input id="name-input" value={name} type="text" onChange={e => setName(e.target.value)}></input>
          <h3>Phone</h3>
          <input id="phone-input" value={phone} type="phone" pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im"
          onChange={e => setPhone(e.target.value)}></input>
          <h3>Email</h3>
          <input id="email-input" value={email} type="email" onChange={e => setEmail(e.target.value)}></input>
          <input type="submit">Add Contact</input>
        </form> 
    </>
  );
};

