import React from "react";
import Cart from "../images/Cart.png";
import Fav from "../images/Fav.png";
import Home from "../images/Home.png";
import Profile from "../images/Profile.png";
import Search from "../images/Search.png";
import logo from "../images/Logo.png";
import { NavabarMob } from "./NavbarMob";

export function Navabar() {
  return (
    <>
      <div className="navbar main">
        <div>
          <div className="navbar">
            <div> Free Return </div> |<div> Try At Home </div> |
            <div> 24 Hr Dispatch </div>
          </div>
          <div className="navbar , bold">
            <div>Glasses</div>
            <div>Sunglasses</div>
            <div>Eye-Test</div>
            <div>Blogs</div>
          </div>
        </div>
        <div>
          <img src={logo} className="logo"></img>
        </div>
        <div>
          <div className="navbar">
            <div>+441613125767</div>|<div>Help</div> |<div>Log in</div>
          </div>
          <div className="navbar">
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
      </div>
      <NavabarMob />
    </>
  );
}
