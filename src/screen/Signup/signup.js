import logo from '../../assets/logo.svg'
import MainButton from "../../components/MainButton/button"

import { colorScheme } from '../../App';

const SignUp = (props) => {

    return (
      <div className="App" style={{ backgroundColor: props.color }}>
      <header className="SignUp-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Sign Up
        </p>
        <MainButton text='Home' color={colorScheme.home}/> 
      </header>
    </div>
    )
  }

export default SignUp;