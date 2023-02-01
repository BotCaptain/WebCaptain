import React, { useState } from "react";
import { formStyles } from "./formStyles";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // User id hard-coded for now, will be retrieved from authentication service later
    // const USER_ID = (Math.random() * 10 ** 10).toString();

    // TEMPORARY -- using localStorage to simulate user being logged in
    localStorage.setItem("loggedIn", true);
  };

  return (
    <form action="/" onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        className="input-box"
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="First Name"
        style={{ margin: formStyles.inputMargin }}
      />
      <input
        type="text"
        value={lastName}
        className="input-box"
        onChange={(event) => setLastName(event.target.value)}
        placeholder="Last Name"
        style={{ margin: formStyles.inputMargin }}
      />

      <br />

      <input
        type="text"
        value={email}
        className="input-box"
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        style={{ margin: formStyles.inputMargin }}
      />
      <input
        type="text"
        value={password}
        className="input-box"
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        style={{ margin: formStyles.inputMargin }}
      />

      <br />

      <button
        type="submit"
        className="button"
        style={{ backgroundColor: formStyles.submitColor }}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
