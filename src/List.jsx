import React from "react";
import Person from "./Person.jsx";
import Data from "./data.js";
import { useState } from "react";

const List = () => {
  const [people, setPeople] = useState(Data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div className="container">
      <h2>{people.length} Birthdays Today </h2>
      {people.map((person) => {
        const { id } = person;
        return <Person key={id} {...person} />;
      })}
      <button className="btn btn-block" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default List;
