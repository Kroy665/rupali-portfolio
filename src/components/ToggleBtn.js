import React from "react";
// import "./ToggleBtn.css";

import { useSelector, useDispatch } from 'react-redux';
import { lightToDark } from '../features/lightDarkMode/lightDark';

function ToggleBtn({ label }) {
    const lightDark = useSelector((state) => state.lightDark.value)
    const dispatch = useDispatch()
    var style = {
        btn:{
            border: "none",
            backgroundColor: lightDark? "#fff": "#2d2d2d",
            color: lightDark? "#000": "#fff",
            width: "50px",
            height: "25px",
            borderRadius: "5px"
        }
    }

    return (
        <div className="container">
            <button style={style.btn} className = "btn" onClick={()=>dispatch(lightToDark())}>{lightDark? "Dark": "Light"}</button>
        </div>
    )
}

export default ToggleBtn