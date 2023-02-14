import React, { useState } from "react";
// import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";
// import userPool from "../../aws/userPool";
import { theme } from "../../theme";

const LogInForm = () => {
  // TODO: implement Cognito authentication
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  return (
    <form className="mx-4">
      <div className="form-group my-4 d-flex justify-content-center">
        <input
          type="email"
          value={email}
          id="login"
          className="form-control py-2 h-25 w-75"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group my-4 d-flex justify-content-center">
        <input
          type="password"
          value={password}
          className="form-control py-2 h-25 w-75"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          required
        />
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-large"
          style={{ backgroundColor: theme.button1 }}
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LogInForm;
