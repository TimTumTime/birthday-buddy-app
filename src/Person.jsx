import { useState } from "react";
import Data from "./data.js";

const Person = (props) => {
  const { name, age, image } = props;

  return (
    <div className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default Person;
