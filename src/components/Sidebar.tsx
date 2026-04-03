import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaThLarge,
  FaFire,
  FaBook,
  FaShieldAlt,
  FaCrown,
  FaGift,
} from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <h2>Lets Upgrade</h2>
      </div>

      {/* Menu */}
      <ul className="menu">
        <li>
          <FaThLarge /> Dashboard
        </li>
        <li>
          <FaFire /> Explore Programs
        </li>
        <li>
          <FaBook /> My Programs
        </li>
        <li>
          <FaShieldAlt /> Certificates
        </li>
        <li>
          <FaCrown /> Rewards <span className="dot"></span>
        </li>
        <li>
          <FaGift /> Refer & Earn
        </li>
        <li>
          <MdOutlineWorkspacePremium /> LU Coins
        </li>
        <li>
          <HiOutlineUserGroup /> Student Ambassador
        </li>
        <li>
          <HiOutlineUserGroup /> Community
        </li>
      </ul>

      {/* Button */}
      <div className="login-btn">
        <button onClick={() => navigate("/login")} >Login</button>
      </div>
    </div>
  );
}
