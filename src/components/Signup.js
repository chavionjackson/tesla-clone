import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "../styles/Signup.css";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { auth } from "google-auth-library";
import { login } from "../features/userSlice";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = (e) => {
    e.preventDefault();
    if (!fName) {
      return alert("Please enter a first name");
    }
    if (!lName) {
      return alert("Please enter a last name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fName,
              })
            );
            history.push("/teslaaccount");
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="signup">
      <div className="signup-header">
        <div className="signup-logo">
          <Link>
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="signup-language">
          <LanguageOutlinedIcon />
          <span>en-US</span>
        </div>
      </div>
      <div className="signup-info">
        <h1>Create Account</h1>
        <form className="signup-form">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="create account" type="submit" onClick={signUp} />
        </form>
        <div className="signup-divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/login">
          <ButtonSecondary name="sign in" />
        </Link>
      </div>
    </div>
  );
};

export default Signup;
