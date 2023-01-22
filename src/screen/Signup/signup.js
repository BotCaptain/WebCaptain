import logo from '../../assets/logo.svg'
import MainButton from "../../components/MainButton/button"

const SignUp = () => {

    return (
      <div className="App">
      <header className="SignUp-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Sign Up
        </p>
        <MainButton text='Home'/> 
      </header>
    </div>
    )
  }

export default SignUp;