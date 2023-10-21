import React from "react";

const Card = ({image, id, name}) => {
    return(
      <div style={{display:"inline-flex", flexDirection:"column", alignItems:"auto"}} className='bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5-l w-20' >
          <img  src={`./patterns/${image}`} alt='patterns'/>
          <div>
              <h2>{id}</h2>
              <p>{name}</p>
          </div>
      </div>
    );
}

export default Card;