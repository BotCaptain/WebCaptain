import React, { useState } from "react";
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";

import userPool from "../../aws/userPool";
import { theme } from "../../theme";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmationNumber, setConfirmationNumber] = useState(undefined);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const inputs = [firstName, lastName, email, password];

  const verifyData = () => {
    var isVerified = true;
    console.log("here");

    inputs.map((item) => {
      if (item === null || item === undefined || item === "") {
        // alert("Please add all info");
        isVerified = false;
      }
    });

    if (isVerified) {
      console.log("was submitted");
      handleSubmit();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let attributeList = [];

    var dataEmail = {
      Name: "email",
      Value: email,
    };

    var dataFirstName = {
      Name: "given_name",
      Value: firstName,
    };

    var dataLastName = {
      Name: "family_name",
      Value: lastName,
    };

    var attributeEmail = new CognitoUserAttribute(dataEmail);
    var attributeFirstName = new CognitoUserAttribute(dataFirstName);
    var attributeLastName = new CognitoUserAttribute(dataLastName);

    attributeList.push(attributeEmail);
    attributeList.push(attributeFirstName);
    attributeList.push(attributeLastName);

    attributeList.push(attributeEmail);
    attributeList.push(attributeFirstName);
    attributeList.push(attributeLastName);

    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      } else {
        setShowConfirmation(true);
      }

      var cognitoUser = result.user;
      console.log("user name is " + cognitoUser.getUsername());
    });
  };

  const confirmRegistration = () => {
    var userData = {
      Username: email,
      Pool: userPool,
    };

    var cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(confirmationNumber, true, (err, result) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log("call result: " + result);
    });
  };

  return (
    <>
      {showConfirmation ? (
        <form onSubmit={() => confirmRegistration()}>
          <div className="form-group">
            <input
              type="number"
              value={confirmationNumber}
              className="form-control py-2 h-25 w-75"
              onChange={(event) => setConfirmationNumber(event.target.value)}
              placeholder="Confirmation Number"
              required
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: theme.button1 }}
            >
              Confirm
            </button>
        </div>
        </form>
      ) : (
        <form className="mx-4" onSubmit={verifyData}>
          <div className="form-group my-4 d-flex justify-content-center">
            <input
              type="text"
              value={firstName}
              id="signup"
              className="form-control py-2 h-25 w-75"
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group my-4 d-flex justify-content-center">
            <input
              type="text"
              value={lastName}
              className="form-control py-2 h-25 w-75"
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group my-4 d-flex justify-content-center">
            <input
              type="email"
              value={email}
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
          <div className="form-group my-4 d-flex justify-content-center">
            {/* Not implemented with Cognito yet */}
            <select className="form-select w-75 py-2" required>
              <option selected>Student</option>
              <option>Instructor</option>
            </select>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-large"
              style={{ backgroundColor: theme.button1 }}
            >
              Sign Up
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default SignUpForm;
