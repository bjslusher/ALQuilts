import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import ComingSoon from "./comingSoon";
import Navbar from "./components/Navbar";
import PatternSearch from "./components/PatternSearch";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Login from "./components/Login";





function App() {


    const [route , setRoute] = useState("home")

    const onRouteChange = (route) => {
        setRoute(route);
    }



    if (route === "home")
        return (

            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <ComingSoon />
            </div>
        );
    if (route === "about")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <AboutMe  />
            </div>
        );
    if (route === "patterns")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <PatternSearch  />
            </div>
        );
    if (route === "portfolio")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <Portfolio  />
            </div>
        );
    if (route === "services")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <Services  />
            </div>
        );
    if (route === "login")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <Login  />
            </div>
        );


}

export default App