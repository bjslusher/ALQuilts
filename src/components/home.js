import React from "react";


const Home = ({quilts}) => {

    const rand = Math.floor(Math.random() * quilts.length)
    const imageURL = (quilts[rand].image)

    return (
        <div style={{fontFamily:"Lucida Handwriting"}} className="tc underline pa3">
            <h1>WELCOME TO ATHENA LYNN QUILTS</h1>
            <img  style={{maxHeight: "750px"}} src={`./Portfolio/${imageURL}`} alt=''/>
        </div>
    )
}

export default Home