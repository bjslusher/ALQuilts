import React from "react";

const Card = ({image, id, name}) => {
    return(
      <div style={{fontFamily:"Lucida Handwriting", maxWidth: '400px' }} className='bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5-l pointer' >
          <img onClick={() => window.open(process.env.PUBLIC_URL + `/patterns/${image}`,'_blank')}  src={process.env.PUBLIC_URL + `/patterns/${image}`} alt='patterns'/>
          <div>
              <h2>{id}</h2>
              <p>{name}</p>
          </div>
      </div>
    );
}

export default Card;