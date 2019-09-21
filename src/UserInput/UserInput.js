import React from "react";

export const UserInput = props => {
  const style = {
    border: "none",
    borderBottom: "2px solid blue"
  };

  return (
    <div className="UserInput">
      <input
        type="text"
        style={style}
        value={props.userName}
        onChange={props.changeUserName}
      />
    </div>
  );
};
