import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { formStyles } from "../../components/SignUpForm/formStyles";

const JoinTeam = (props) => {
  // TEMPORARY -- using localStorage to simulate user being logged in
  if (localStorage.getItem("loggedIn") === false) {
    return <Navigate replace to="/login" />;
  }

  const [teamName, setTeamName] = useState("");
  const [teamPass, setTeamPass] = useState("");

  function handleSubmit() {
    // will be used later to check if teamName & teamPass are a valid combo

    alert(`Successfully Joined Team!\nTeam Name: ${teamName}`);
  }

  return (
    <div className="App" style={{ backgroundColor: props.color }}>
      <header className="SignUp-header">
        <p>Join Team</p>
        <form action="/" onSubmit={handleSubmit}>
          <input
            type="text"
            value={teamName}
            className="input-box"
            onChange={(event) => setTeamName(event.target.value)}
            placeholder="Team Name"
            style={{ margin: formStyles.inputMargin }}
          />
          <input
            type="text"
            value={teamPass}
            className="input-box"
            onChange={(event) => setTeamPass(event.target.value)}
            placeholder="Team Password"
            style={{ margin: formStyles.inputMargin }}
          />

          <br />

          <button
            type="submit"
            className="button"
            style={{ backgroundColor: formStyles.submitColor }}
          >
            Join Team
          </button>
        </form>
      </header>
    </div>
  );
};

export default JoinTeam;
