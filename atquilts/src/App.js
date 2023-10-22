import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import PatternSearch from "./components/PatternSearch";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Login from "./components/Login";
import {works} from "./portfolioList";





function App() {
    const [quilts , setPatterns] = useState(works)

    const [route , setRoute] = useState("home")

    const onRouteChange = (route) => {
        setRoute(route);
    }



    if (route === "home")
        return (

            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <Home quilts={quilts}/>
                <Footer />
            </div>
        );
    if (route === "about")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <AboutMe  />
                <Footer />
            </div>
        );
    if (route === "patterns")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <PatternSearch  />
                <Footer />
            </div>
        );
    if (route === "portfolio")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <Portfolio  quilts={quilts}/>
                <Footer />
            </div>
        );
    if (route === "services")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <Services  />
                <Footer />
            </div>
        );
    if (route === "login")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <Login  />
                <Footer />
            </div>
        );


}

export default App