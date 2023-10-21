import React, { useState } from "react";

import PatternSearch from "./components/PatternSearch";
import Navbar from "./components/Navbar";

import ComingSoon from "./comingSoon";


function App() {


    const [route , setRoute] = useState("home")

    const onRouteChange = (route) => {
        setRoute(route);
        console.log(route)
    }

    if (route === "home")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <ComingSoon />
            </div>
        );
    if (route === "patterns")
        return (
            <div className="alquilts">
                <Navbar onRouteChange={onRouteChange}/>
                <PatternSearch  />
            </div>
        );


}

export default App