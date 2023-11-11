import React from "react";

const PortfolioCard = ({image, name}) => {
    return(
        <div style={{fontFamily:"Lucida Handwriting", display:"inline-flex", flexDirection:"column", alignItems:"auto", maxWidth: '400px'}}
             className='bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5-l pointer' >
            <img  onClick={() => window.open(process.env.PUBLIC_URL + `/Portfolio/${image}`,'')} src={process.env.PUBLIC_URL + `/Portfolio/${image}`} alt='Quilts'/>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default PortfolioCard;