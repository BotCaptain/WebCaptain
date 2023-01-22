import logo from '../../assets/logo.svg'
import MainButton from "../../components/MainButton/button"
import InputBox from "../../components/InputBox/inputBox"

const LogIn = (props) => {
    return (
      <div className="App" style={{ backgroundColor: props.color }}>
      <header className="LogIn-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Log In
        </p>
        <MainButton text='Home' color='red'/>
        <InputBox/>
      </header>
    </div>
    )
  }

export default LogIn;