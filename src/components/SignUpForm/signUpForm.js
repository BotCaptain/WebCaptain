import React, { useState } from "react";
import { formStyles } from "./formStyles";
import {
	CognitoUserAttribute,
  CognitoUser
} from 'amazon-cognito-identity-js';

import { ConfirmButton } from "../ActionButtons/actionButtons";
import userPool from '../../aws/userPool';


const SignUpForm = () => {
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmationNumber, setConfirmationNumber] = useState(undefined);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const inputs = [firstName, lastName, email, password]

  const verifyData = () =>{
    var isVerified = true
    console.log('here')

    inputs.map((item)=> {
      if (item === null || item === undefined || item === ""){
        alert('Please add all info');
        isVerified = false
      }
    })

    if (isVerified){
      console.log('was submitted')
      handleSubmit()
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let attributeList = [];

    
    var dataEmail = {
      Name: 'email',
      Value: email
    };

    var dataFirstName = {
      Name: 'given_name',
      Value: firstName
    };

    var dataLastName = {
      Name: 'family_name',
      Value: lastName
    };

    var attributeEmail = new CognitoUserAttribute(dataEmail);
    var attributeFirstName= new CognitoUserAttribute(dataFirstName);
    var attributeLastName= new CognitoUserAttribute(dataLastName);

    attributeList.push(attributeEmail);
    attributeList.push(attributeFirstName);
    attributeList.push(attributeLastName);


    attributeList.push(attributeEmail);
    attributeList.push(attributeFirstName);
    attributeList.push(attributeLastName);

    userPool.signUp(email, password, attributeList, null, (err,result) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }else{setShowConfirmation(true)}

      var cognitoUser = result.user;
      console.log('user name is ' + cognitoUser.getUsername());
    })


  };

  const confirmRegistration = () => {
    var userData = {
      Username: email,
      Pool: userPool,
    };

    var cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(confirmationNumber, true, (err, result)=> {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log('call result: ' + result);
    })
  }



  return (
    <>
    { showConfirmation ? 
    (
    <form onSubmit={()=> confirmRegistration()}>
        <input
          type="number"
          value={confirmationNumber}
          className="input-box"
          onChange={(event) => setConfirmationNumber(event.target.value)}
          placeholder="Confirmation Number"
          style={{ margin: formStyles.inputMargin }}
      />
      <br/>
        <button
        type="submit"
        className="confirm-button"
        style={{ backgroundColor: formStyles.submitColor }}
      >
         Confirm
      </button>
      </form>
      ):
      (<form  onSubmit={verifyData}>
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
        className="confirm-button"
        style={{ backgroundColor: formStyles.submitColor }}
      >
        Sign Up
      </button>
    </form>)}
    </>
  );
};

export default SignUpForm;
