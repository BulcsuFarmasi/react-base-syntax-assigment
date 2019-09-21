import React from "react";

export const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>Hi, I am part of the React base syntax assigment.</p>
      <p>And, I am {props.userName}</p>
    </div>
  );
};
