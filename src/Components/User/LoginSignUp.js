import React, { useState, useRef } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FaceIcon from "@mui/icons-material/Face";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignUp.css";
import authService from '../../services/authservices';

const LoginSignUp = () => {
  const navigate = useNavigate();
  const loginTab = useRef();
  const registerTab = useRef();
  const switcherTab = useRef();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [message, setMessage] = useState(null);

  const [user, setUser] = useState({
    username: "",
    useremail: "",
    password: "",
  });
  const { username, useremail, password } = user;

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(loginEmail, loginPassword);

      if (response.status === 201) {
        console.log(response.data.message); // For success message
        setMessage({ type: 'success', text: response.data.message });
        setTimeout(() => setMessage(null), 5000);
        navigate("/Dashboardlanding", { state: { message: response.data.message } });
      } else if(response.status === 200) {
        console.error(response.data.message); // For error message
        setMessage({ type: 'error', text: response.data.message });
        setTimeout(() => setMessage(null), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: 'error', text: error.message });
      setTimeout(() => setMessage(null), 5000);
    }
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/register/", {
        username: user.username,
        useremail: user.useremail,
        password: user.password,
      });

      if (response.status === 201) {
        setMessage({ type: 'success', text: response.data.message });
        setTimeout(() => setMessage(null), 5000);
        clearFormData();
        switchTabs(null, "login"); // Switch to login tab
      } else if(response.status === 200) {
        setMessage({ type: 'error', text: response.data.message });
        setTimeout(() => setMessage(null), 5000);
      }
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
      setTimeout(() => setMessage(null), 5000);
    }
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  const clearFormData = () => {
    setUser({
      username: "",
      useremail: "",
      password: "",
    });
  };

  return (
    <React.Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Link to="/password/forgot">Forget Password ?</Link>
            <input type="submit" value="Login" className="loginBtn" />
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <FaceIcon />
              <input
                type="text"
                placeholder="Name"
                required
                name="username"
                value={username}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                name="useremail"
                value={useremail}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>

            <input type="submit" value="Register" className="signUpBtn" />
          </form>
          {message && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginSignUp;
