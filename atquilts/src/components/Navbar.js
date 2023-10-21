import React from "react";
import logo from '../hi_def_logo.png';

const Navbar = ({onRouteChange}) => {
    console.log()
    return(
        <nav className="dt w-100 bg-lightest-blue pa3 ph5-ns">
            <p onClick={() => onRouteChange("home")} className="dtc v-mid mid-gray link dim w-10" title="Home">
                <img src={logo} className=" " alt="alquilts" style={{maxHeight: "75px", maxWidth: "auto"}}/>
            </p>
            <div className="dtc v-mid w-75 tr">
                <p className="link underline dim dark-gray f6 f5-ns dib mr3 mr4-ns"  title="About">About Me</p>
                <p className="link underline dim dark-gray f6 f5-ns dib mr3 mr4-ns" title="About">Services</p>
                <p className="link underline dim dark-gray f6 f5-ns dib mr3 mr4-ns"  title="About">Portfolio</p>
                <p onClick={() => onRouteChange("patterns")}
                   className="link underline dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer">Pattern Search</p>
                <p className="link underline dim dark-gray f6 f5-ns dib"  title="Contact">Log In</p>
            </div>
        </nav>
    );
}

export default Navbar;