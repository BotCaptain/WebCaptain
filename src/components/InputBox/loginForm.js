// Dependencies
import React, { useState, useContext } from 'react';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

// Componets
import userPool from '../../aws/userPool';

// Context
import UserContext from '../../context/userContext';

// Styling
import './loginForm.css';

const LoginForm = ({setAuthenticated}) => {
  const [email, setEmail] = useState('cobosd@my.erau.edu');
  const [password, setPassword] = useState('Password1!');
  const {userContext, setUserContext} = useContext(UserContext);


  const handleSubmit = (event) => {
    event.preventDefault();

    const authenticationData = {
      Username: email,
      Password: password,
    };
    const userData = {
      Username: email,
      Pool: userPool,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const cognitoUser = new CognitoUser(userData);

    console.log("Authenticating with User Pool");

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
        // var idToken = result.idToken.jwtToken;
        // console.log('Logged in \n', result.getAccessToken().payload);
        var accessToken = result.getAccessToken().getJwtToken();

        let userInfo = {accessToken: accessToken}

        cognitoUser.getUserAttributes(async (err, result)=> {
          for (let i = 0; i < result.length; i++) {
            let key = result[i].Name.split("_").join("")
            userInfo[key] = result[i].Value
            console.log(userInfo)
          }

          setAuthenticated(true)
          setUserContext(userInfo)
        })
      },
      onFailure: (err) => {
        console.log(err.message ? err.message : err);
      }
      });


      // const getUserAtrributes = ()=>{
      //   let i=0
      //   cognitoUser.getUserAttributes(function(err, result) {
      //     if (err) {
      //       alert(err.message || JSON.stringify(err));
      //       return;
      //     }
      //     for (i = 0; i < result.length; i++) {
      //       console.log(
      //         'attribute ' + result[i].getName() + ' has value ' + result[i].getValue()
      //       );
      //     }
      // });}

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        className="input-box"
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={password}
        className="input-box"
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button
        type="submit"
        className="confirm-button"
      >
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
