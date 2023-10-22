import React from "react";
import PortfolioCardList from "./PortfolioCardList";

const Portfolio = ({quilts}) => {

    return (
        <div className='tc'>
            <h1 style={{fontFamily:"Lucida Handwriting"}} className='underline ma0 pa4'>My Works</h1>
            <PortfolioCardList quilts={quilts} />

        </div>
    )
}

export default Portfolio;