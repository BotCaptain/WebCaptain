import React, { useState  } from "react";
import './input.css'

const InputBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div >
      <input
        type="text"
        value={email}
        className="input-box"
        onChange={(event)=>setEmail(event.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={password}
        className="input-box"
        onChange={(event)=>setPassword(event.target.value)}
        placeholder="Password"
      />
    </div>
  );
}

export default InputBox
