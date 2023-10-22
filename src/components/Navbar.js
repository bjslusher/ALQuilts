import React from "react";
import logo from '../hi_def_logo.png';

const Navbar = ({onRouteChange}) => {
    console.log()
    return(
        <nav className="dt w-100 pa3 ph5-ns">
            <p onClick={() => onRouteChange("home")} className="dtc v-mid mid-gray link dim w-10 pointer" title="Home">
                <img src={logo} className=" " alt="alquilts" style={{maxHeight: "75px", maxWidth: "auto"}}/>
            </p>
            <div className="dtc v-mid w-75 tr">
                <p onClick={() => onRouteChange("about")}
                   className="link underline dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer"  >About Me</p>
                <p onClick={() => onRouteChange("services")}
                   className="link underline dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer" >Services</p>
                <p onClick={() => onRouteChange("portfolio")}
                   className="link underline dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer" >Portfolio</p>
                <p onClick={() => onRouteChange("patterns")}
                   className="link underline dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer">Pattern Search</p>
                <p onClick={() => onRouteChange("contact")}
                   className="link underline dim dark-gray f6 f5-ns dib pointer" >Contact Me</p>
            </div>
        </nav>
    );
}

export default Navbar;