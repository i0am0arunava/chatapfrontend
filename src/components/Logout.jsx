import {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";

import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";
import { ThemeContext } from "../context/theme";
import "./comp.css";
export default function Logout({currentUser,currentChat}) {
  
  const currentTheme = useContext(ThemeContext)
  console.log("currenttheme.to",currentTheme.to)
  console.log("currenttheme.to",currentTheme.to)
  const navigate = useNavigate();
  const handleClick = async () => {
  
      localStorage.clear();
      navigate("/login");

  };
  return (
    <div className="button" onClick={handleClick}>
      <BiPowerOff />
    
    </div>
  );
}
