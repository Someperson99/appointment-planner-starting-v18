import React from "react";

export const TileList = (props) => {

  function generateContactList(){
    return props.contacts.map((contact) => {
      return (
          <li>
            <p>{contact.name}</p>
            <ul>
              <li>description: {contact.description}</li>
            </ul>
          </li>
      )
    });
  }

  return (
    <div>
      {generateContactList()}
    </div>
  );
};
