import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");

  function duplicateName(){
    return props.contacts.find((contact) => contact.name === name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicateName()){
      props.addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }else{
      alert("user with that name already exists");
    }
  };

  function generateContactList(){
    return props.contacts.map((contact) => {
      return (
          <li>
            <p>{contact.name}</p>
            <ul>
              <li>Phone: {contact.phone}</li>
              <li>Email: {contact.email}</li>
            </ul>
          </li>
      )
    });
  }

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <h3>Name</h3>
          <input id="name-input" value={name} onChange={e => setName(e.target.value)}></input>
          <h3>Phone</h3>
          <input id="phone-input" value={phone} onChange={e => setPhone(e.target.value)}></input>
          <h3>Email</h3>
          <input id="email-input" value={email} onChange={e => setEmail(e.target.value)}></input>
          <button>Add Contact</button>
        </form> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <ul>{generateContactList()}</ul>
      </section>
    </div>
  );
};
