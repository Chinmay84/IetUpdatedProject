import React from 'react'
import '../../App.css'
import { GiCat } from "react-icons/gi";
import { useEffect } from 'react'

import {
  FaSistrix,
  FaHome,
  FaFontAwesomeFlag,
  FaVideo,
  FaUsers,
  FaGamepad,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";

import $ from 'jquery';






function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__first">
        <div className="navbar__first-logo">
          <GiCat className="navbar__logo" />
        </div>
        <div className="navbar__first-search">
          <input
            type="text"
            className="navbar__first-searchbar"
            placeholder="Search"
          />
          <FaSistrix className="navar__searchIcon" />
        </div>
      </div>
      <div className="navbar__middle">
        <span className="middleIcon">
          <FaHome className="navbar__middle-icons btn-outline-primary" />
        </span>
        <span className="middleIcon">
          <FaFontAwesomeFlag className="navbar__middle-icons btn-outline-primary" />
          <span className="navbar__notify">3</span>
        </span>
        <span className="middleIcon">
          <FaVideo className="navbar__middle-icons btn-outline-primary" />
          <span className="navbar__notify">7</span>
        </span>

        
      </div>


      <div className="navbar__last">
        <span className="">
          <select className="form-select btn btn-primary dropdown-toggle fa fa-user-check">           
            <option value="1">SignOut</option>
            <option value="3">Help</option>
            <option value="3">Change-Password</option>
          </select >
        </span>
      </div>
    </div>
  )
}

export default Navbar


 
















  