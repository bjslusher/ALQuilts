import React, {useState} from "react";
import ComingSoon from "../comingSoon";
import {works} from "../portfolioList";
import PortfolioCardList from "./PortfolioCardList";

const Portfolio = () => {

    const [quilts , setPatterns] = useState(works)

    return (
        <div className='tc'>
            <h1 style={{fontFamily:"Lucida Handwriting"}} className='underline ma0 pa4'>My Works</h1>
            <PortfolioCardList quilts={quilts} />

        </div>
    )
}

export default Portfolio;