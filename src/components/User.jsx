import React, { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <button
        onClick={() => {
          setCount(count > 0 ? count - 1 : count);
        }}
      >
        Count Decrease
      </button>
      <h2>Name : {name}</h2>
      <h3>Location : Tamil Nadu</h3>
    </div>
  );
};

export default User;
