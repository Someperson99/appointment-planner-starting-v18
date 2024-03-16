import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="title-title">{name}</p>
      {description.map((title) => {
        return(<p className="title">{title}</p>);
      })}
    </div>
  );
};
