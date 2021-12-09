import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';


export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const toRegister = async () => {
    try {
        window.location.href = '/register';
    } 
    catch (err) {
      console.log(err);
    }
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    const a = loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    console.log(a);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">RELIER</h3>
          <span className="loginDesc">Connect with friends and the world around you on Relier.</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? ( <CircularProgress color="primary" size="30px"/>) : ("Log In")}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={toRegister}>
              {isFetching ? (<CircularProgress color="primary" size="30px" />) : ("Create a New Account")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}