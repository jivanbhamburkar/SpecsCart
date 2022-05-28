import React from "react";
import Cart from "../images/Cart.png";
import Fav from "../images/Fav.png";
import Home from "../images/Home.png";
import Profile from "../images/Profile.png";
import Search from "../images/Search.png";
import logo from "../images/Logo.png";
import { FaBars } from "react-icons/fa";
export function NavabarMob() {
  return (
    <div className="navbarMob">
      <div className="flexrow">
        <div>
          <FaBars style={{ fontSize: "30px", color: "grey" }} />
        </div>

        <img src={logo} className="logo"></img>
      </div>
      <div className="flexrow">
        <div>
          <img src={Search}></img>
        </div>
        <div>
          <img src={Profile}></img>
        </div>
        <div>
          <img src={Fav}></img>
        </div>
        <div>
          <img src={Home}></img>
        </div>
        <div>
          <img src={Cart}></img>
        </div>
      </div>
    </div>
  );
}
