import React, { useEffect, useState } from "react";
import navlogo from "./assets/NetflixTransparent.png";
import navAvatar from "./assets/TJTEK.jpg";
import "./Nav.css"
import { useNavigate } from "react-router-dom";


function Nav() {

    const [show, handleShow] = useState(false);
    const history = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img onClick={() => history("/home")}
        className="nav__logo"
        src={navAvatar}
        alt="Netflix Logo"
      />

      <img onClick={() => history("/profile")}
        className="nav__avatar"
        src={navAvatar}
        alt="netflix-avatar"
      />
      
    </div>
  );
}

export default Nav;
