import { useState } from "react";

const User = ({ name }) => {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(1);
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count: {count2}</h2>
      <h2>Name:{name}</h2>
      <h3>Location: Model Colony</h3>
      <h4>Contact: hammad@gmail.com</h4>
    </div>
  );
};
export default User;