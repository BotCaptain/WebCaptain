import logo from '../../assets/logo.svg'
import MainButton from "../../components/MainButton/button"

const LogIn = () => {
    return (
      <div className="App">
      <header className="LogIn-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Log In
        </p>
        <MainButton text='Home' />
      </header>
    </div>
    )
  }

export default LogIn;