import React from "react";
import { Link } from "react-router-dom";
import "./styles/TeslaAccount.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Car from "./components/Car";

const TeslaAccount = ({ isMenuOpen, setIsMenuOpen }) => {
  const user = useSelector(selectUser);

  const logOutOfApp = () => {};

  return (
    <div className="teslaAccount">
      <div className="teslaAccount-header">
        <div className="teslaAccount-logo">
          <Link>
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="teslaAccount-links">
          <Link to="/teslaaccount">Model S</Link>
          <Link to="/teslaaccount">Model 3</Link>
          <Link to="/teslaaccount">Model X</Link>
          <Link to="/teslaaccount">Model Y</Link>
          <Link to="/teslaaccount">Solar Roof</Link>
          <Link to="/teslaaccount">Solar Panels</Link>
          <Link to="/teslaaccount">Shop</Link>
          <Link to="/teslaaccount">Tesla Account</Link>
          <Link onClick={logOutOfApp}>Log out</Link>
          <div
            className="teslaAccount-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon className="teslaAccount-closeMenu" />
            ) : (
              <MenuIcon />
            )}
          </div>
        </div>
      </div>
      <div className="teslaAccount-info">
        <div className="teslaAccount-person">
          <h4>{user?.displayName + "'s"}</h4>
        </div>
        <div className="teslaAccount-infoRight">
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logOutOfApp}>Sign out</Link>
        </div>
      </div>
      <div className="teslaAccount-car">
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </div>
    </div>
  );
};

export default TeslaAccount;
