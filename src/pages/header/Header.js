import React from "react";
import data from "../../profileData/profileData";
import "./styles/Header.css";
import { useSelector} from 'react-redux';
// import { lightToDark } from '../../features/lightDarkMode/lightDark';
import profilePic from '../../profileData/profilePic.jpg'

function Header() {
  const lightDark = useSelector((state) => state.lightDark.value)
  // const dispatch = useDispatch()
  
  var lightModeStyle = {
    color: "#000",
    backgroundColor: "#d4d4d4"
  }
  var darkModeStyle = {
    color: "#fff",
    backgroundColor: "#0d0d0d"
  }

  return (
    <div className="header" style={lightDark? lightModeStyle: darkModeStyle}>

      <div className="small-profile-pic">
        <img src={profilePic} className="profile-pic" alt={data.first_name}/>
        <p className="profile-name">{data.first_name} {data.last_name}</p>
      </div>
      {/* <div className="toggle-button-div">
        <ToggleBtn label={'Dark Mode'} />
      </div> */}
    </div>
  );
}

export default Header;
