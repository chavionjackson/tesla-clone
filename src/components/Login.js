import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useHistory } from "react-router-dom";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
// import app from "../firebase";
import { useDispatch } from "react-redux";
import { db, signInWithEmailAndPassword } from "../firebase";
import { login } from "../features/userSlice";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

//   signInWithEmailAndPassword(db, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });

    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(db, email, password)
        .then((userAuth) => {
          // Signed in
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
            })
          );
          history.push("/teslaaccount");
        })
        .catch((err) => {
          alert(err.message);
        });
    };

//   const signIn = (e) => {
//     e.preventDefault();
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((userAuth) => {
//         dispatch(
//           login({
//             email: userAuth.user.email,
//             uid: userAuth.user.uid,
//             displayName: userAuth.user.displayName,
//           })
//         );
//         history.push("/teslaaccount");
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   };

  return (
    <div className="login">
      <div className="login-header">
        <div className="login-logo">
          <Link>
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="login-language">
          <LanguageOutlinedIcon />
          <span>en-US</span>
        </div>
      </div>
      <div className="login-info">
        <h1>Sign In</h1>
        <form className="login-form">
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
          <ButtonPrimary name="Sign In" type="submit" onClick={signIn} />
        </form>
        <div className="login-divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/signup">
          <ButtonSecondary name="create account" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
