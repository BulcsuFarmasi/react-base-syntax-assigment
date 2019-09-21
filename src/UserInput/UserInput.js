import React from "react";

export const UserInput = props => {
  return (
    <div className="UserInput">
      <input type="text" onChange={props.changeUserName} />
    </div>
  );
};
